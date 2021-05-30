import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';
import { BioInicio, CorpoInicio, DescricaoInicio, DivMetricas, Header, ImgInicio, MetricasInicio } from '../Inicio/styles';
import { CgEnter } from "react-icons/cg";
import colors from '../../colors.json';
import { api } from '../../api/api';
import { FaArrowLeft } from 'react-icons/fa';
import { HeaderOutro, OutroUsuarioDiv } from './styles';

export default function PaginOutroUsuario() {
    const { usuario, setUsuario } = useAuth();
    const [outroUsuario, setOutroUsuario] = useState();
    const { rota, setRota } = useRoute();

    let history = useHistory();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem('otherUser')
        async function getItems() {
            try {
                const { data } = await api.get(`/users/${nomeUsuario}`);
                setOutroUsuario(data);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os items: " + error);
            }
        }
        getItems();
    }, []);

    function Save() {
        useEffect(() => {
            const nomeUsuario = localStorage.getItem('otherUser')
            async function getItems() {
                try {
                    const { data } = await api.get(`/users/${nomeUsuario}`);
                    setUsuario(data);
                } catch (error) {
                    console.log("Ocorreu um erro ao buscar os items: " + error);
                }
            }
            getItems();
        }, []);
        setRota(history.location.pathname);
    }

    return (
        <>
            <HeaderOutro>
                <Link to='/inicio' onClick={() => setRota(history.location.pathname)}>
                    <FaArrowLeft />
                </Link>
                <h3>#{outroUsuario?.login}</h3>
                <Link to='/inicio' onClick={Save(outroUsuario?.login)}>
                    <h4>Salvar <CgEnter style={{ color: `green` }} /></h4>
                </Link>
            </HeaderOutro>
            <CorpoInicio>
                <ImgInicio src={outroUsuario?.avatar_url} alt={outroUsuario?.avatar_url}></ImgInicio>
                <DescricaoInicio>
                    <h2>{outroUsuario?.name}</h2>
                    <h3>{outroUsuario?.email}</h3>
                    <h3>{outroUsuario?.location}</h3>
                </DescricaoInicio>
                <MetricasInicio>
                    <DivMetricas>
                        <Link to='/seguidores' onClick={() => setRota(history.location.pathname)}>
                            <h2>{outroUsuario?.followers}</h2>
                            <h3>Seguidores</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/seguindo' onClick={() => setRota(history.location.pathname)}>
                            <h2>{outroUsuario?.following}</h2>
                            <h3>Seguindo</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/repositorio' onClick={() => setRota(history.location.pathname)}>
                            <h2>{outroUsuario?.public_repos}</h2>
                            <h3>Repos</h3>
                        </Link>
                    </DivMetricas>
                </MetricasInicio>
                <BioInicio>
                    <h2>BIO</h2>
                    <h3>{outroUsuario?.bio}</h3>
                </BioInicio>
            </CorpoInicio>
        </>
    )
}

