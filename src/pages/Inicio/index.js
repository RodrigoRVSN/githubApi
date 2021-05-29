import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';
import { BioInicio, CorpoInicio, DescricaoInicio, DivMetricas, Header, ImgInicio, MetricasInicio } from './styles';
import { MdExitToApp } from "react-icons/md";
import colors from '../../colors.json';
import { api } from '../../api/api';

export default function PaginaInicio() {
    const { usuario, setUsuario } = useAuth();
    const { rota, setRota } = useRoute();

    let history = useHistory();

    function Quit() {
        localStorage.removeItem('userKey');
        setUsuario('');
        setRota(history.location.pathname);
    }

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get(`/users/${usuario.login}`);
                setUsuario(data);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os items: " + error);
            }
        }
        getItems();
    }, []);

    return (
        <>
            <Header>
                <h3>#{usuario.login}</h3>
                <Link to='/' onClick={Quit}>
                    <h4>Sair <MdExitToApp style={{ color: `red` }} /></h4>
                </Link>
            </Header>
            <CorpoInicio>
                <ImgInicio src={usuario.avatar_url} alt={usuario.avatar_url}></ImgInicio>
                <DescricaoInicio>
                    <h2>{usuario.name}</h2>
                    <h3>{usuario.email}</h3>
                    <h3>{usuario.location}</h3>
                </DescricaoInicio>
                <MetricasInicio>
                    <DivMetricas>
                        <Link to='/seguidores' onClick={() => setRota(history.location.pathname)}>
                            <h2>{usuario.followers}</h2>
                            <h3>Seguidores</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/seguindo' onClick={() => setRota(history.location.pathname)}>
                            <h2>{usuario.following}</h2>
                            <h3>Seguindo</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/repositorio' onClick={() => setRota(history.location.pathname)}>
                            <h2>{usuario.public_repos}</h2>
                            <h3>Repos</h3>
                        </Link>
                    </DivMetricas>
                </MetricasInicio>
                <BioInicio>
                    <h2>BIO</h2>
                    <h3>{usuario.bio}</h3>
                </BioInicio>
            </CorpoInicio>
        </>
    )
}

