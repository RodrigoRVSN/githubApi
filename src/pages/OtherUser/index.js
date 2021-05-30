import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';
import { BioInicio, CorpoInicio, DescricaoInicio, DivMetricas, ImgInicio, MetricasInicio } from '../HomePage/styles';
import { CgEnter } from "react-icons/cg";
import { api } from '../../api/api';
import { FaArrowLeft } from 'react-icons/fa';
import { HeaderOutro } from './styles';

export default function OtherUserPage() {
    const { setUser } = useAuth();
    const [otherUser, setOtherUser] = useState();
    const { setRoute } = useRoute();

    let history = useHistory();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem('otherUser')
        async function getItems() {
            try {
                const { data } = await api.get(`/users/${nomeUsuario}`);
                setOtherUser(data);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os items: " + error);
            }
        }
        getItems();
    }, []);

    async function Save() {
        const nomeUsuario = localStorage.getItem('otherUser')
        await api.get(`users/${nomeUsuario}`)
            .then((response) => {
                setUser(response.data);
                localStorage.setItem('userKey', nomeUsuario);
                setRoute(history.location.pathname);
            }
            )
            .catch((err) => {
                history.push('/');
            });
    }

    return (
        <>
            <HeaderOutro>
                <Link to='/inicio' onClick={() => setRoute(history.location.pathname)}>
                    <FaArrowLeft />
                </Link>
                <h3>#{otherUser?.login}</h3>
                <Link to='/inicio' onClick={Save}>
                    <h4>Salvar <CgEnter style={{ color: `green` }} /></h4>
                </Link>
            </HeaderOutro>
            <CorpoInicio>
                <ImgInicio src={otherUser?.avatar_url} alt={otherUser?.avatar_url}></ImgInicio>
                <DescricaoInicio>
                    <h2>{otherUser?.name}</h2>
                    <h3>{otherUser?.email}</h3>
                    <h3>{otherUser?.location}</h3>
                </DescricaoInicio>
                <MetricasInicio>
                    <DivMetricas>
                        <Link to='/seguidores' onClick={() => setRoute(history.location.pathname)}>
                            <h2>{otherUser?.followers}</h2>
                            <h3>Seguidores</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/seguindo' onClick={() => setRoute(history.location.pathname)}>
                            <h2>{otherUser?.following}</h2>
                            <h3>Seguindo</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/repositorio' onClick={() => setRoute(history.location.pathname)}>
                            <h2>{otherUser?.public_repos}</h2>
                            <h3>Repos</h3>
                        </Link>
                    </DivMetricas>
                </MetricasInicio>
                <BioInicio>
                    <h2>BIO</h2>
                    <h3>{otherUser?.bio}</h3>
                </BioInicio>
            </CorpoInicio>
        </>
    )
}

