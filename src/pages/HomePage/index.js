import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';
import { BioInicio, CorpoInicio, DescricaoInicio, DivMetricas, Header, ImgInicio, MetricasInicio } from './styles';
import { MdExitToApp } from "react-icons/md";
import { api } from '../../api/api';

export default function HomePage() {
    const { user, setUser } = useAuth();
    const { setRoute } = useRoute();

    let history = useHistory();

    function Quit() {
        localStorage.removeItem('userKey');
        localStorage.removeItem('otherUser');
        setUser('');
        setRoute();
    }

    useEffect(() => {
        setRoute(history.location.pathname);
        const nomeUsuario = localStorage.getItem('userKey')
        async function getItems() {
            try {
                const { data } = await api.get(`/users/${nomeUsuario}`);
                setUser(data);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os items: " + error);
            }
        }
        getItems();
    }, [setUser, user.login]);

    return (
        <>
            <Header>
                <h3>#{user.login}</h3>
                <Link to='/' onClick={Quit}>
                    <h4>Sair <MdExitToApp style={{ color: `red` }} /></h4>
                </Link>
            </Header>
            <CorpoInicio>
                <ImgInicio src={user.avatar_url} alt={user.avatar_url}></ImgInicio>
                <DescricaoInicio>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <h3>{user.location}</h3>
                </DescricaoInicio>
                <MetricasInicio>
                    <DivMetricas>
                        <Link to='/seguidores' onClick={() => setRoute(history.location.pathname)}>
                            <h2>{user.followers}</h2>
                            <h3>Seguidores</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/seguindo' onClick={() => setRoute(history.location.pathname)}>
                            <h2>{user.following}</h2>
                            <h3>Seguindo</h3>
                        </Link>
                    </DivMetricas>
                    <DivMetricas>
                        <Link to='/repositorio' onClick={() => setRoute(history.location.pathname)}>
                            <h2>{user.public_repos}</h2>
                            <h3>Repos</h3>
                        </Link>
                    </DivMetricas>
                </MetricasInicio>
                <BioInicio>
                    <h2>BIO</h2>
                    <h3>{user.bio}</h3>
                </BioInicio>
            </CorpoInicio>
        </>
    )
}

