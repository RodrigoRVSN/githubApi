import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../api/api';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Header } from '../../components/Header/styles';
import { CardComunidade } from '../../components/CardComunidade/styles';
import { ImgComunidade } from '../../components/ImgComunidade/styles';
import { CorpoPagina } from '../../components/CorpoPagina/styles';

export default function PaginaSeguindo() {
    const { usuario, setUsuario } = useAuth();
    const [seguindo, setSeguindo] = useState();
    const { rota, setRota } = useRoute();

    let history = useHistory();

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get(`/users/${usuario.login}/following`);
                setSeguindo(data);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os items: " + error);
            }
        }
        getItems();
    }, []);

    return (
        <>
            <Header>
                <Link to='/inicio' onClick={() => setRota(history.location.pathname)}>
                    <FaArrowLeft />
                </Link>
                <h3>{seguindo?.length} seguindo</h3>
            </Header>

            <CorpoPagina>
                <ul>

                    {seguindo?.map((seguindo) => (
                        <CardComunidade key={seguindo.id} >
                            <ImgComunidade src={seguindo.avatar_url}></ImgComunidade>
                            <h3>{seguindo.login}</h3>
                            <FaArrowRight />
                        </CardComunidade>
                    ))}

                </ul>
            </CorpoPagina>
        </>
    )
}

