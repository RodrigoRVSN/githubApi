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

export default function PaginaSeguidores() {
    const { usuario, setUsuario } = useAuth();
    const [seguidores, setSeguidores] = useState();
    const { rota, setRota } = useRoute();

    let history = useHistory();

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get("/users/RodrigoRVSN/followers");
                setSeguidores(data);
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
                <h3>{seguidores?.length} seguidores</h3>
            </Header>

            <CorpoPagina>
                <ul>

                    {seguidores?.map((seguidores) => (
                        <CardComunidade key={seguidores.id} >
                            <ImgComunidade src={seguidores.avatar_url}></ImgComunidade>
                            <h3>{seguidores.login}</h3>
                            <FaArrowRight />
                        </CardComunidade>
                    ))}

                </ul>
            </CorpoPagina>
        </>
    )
}

