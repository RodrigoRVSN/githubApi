import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';
import { BioInicio, CorpoInicio, DescricaoInicio, DivMetricas, Header, ImgInicio, MetricasInicio } from './styles';

export default function PaginaInicio() {
    const { usuario, setUsuario } = useAuth();
    const { rota, setRota } = useRoute();

    let history = useHistory();

    return (
        <>
            <Header>
                <h4>{usuario.name}</h4>
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

