import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../api/api';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';
import { Card, CorpoRepositorios, Header, IconsDiv } from './styles';
import { FaLock, FaRegStar, FaUnlock, FaArrowLeft } from 'react-icons/fa';

import colors from '../../colors.json';

export default function PaginaRepositorio() {
    const { usuario, setUsuario } = useAuth();
    const [repositorio, setRepositorio] = useState();
    const { rota, setRota } = useRoute();

    let history = useHistory();

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get("/users/allyfx/repos");
                setRepositorio(data);
            } catch (error) {
                alert("Ocorreu um erro ao buscar os items: " + error);
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
                <h3>{repositorio?.length} repositórios</h3>
            </Header>

            <CorpoRepositorios>
                <ul>

                    {repositorio?.map((repositorio) => (
                        <a target="_blank" rel="noreferrer" href={repositorio.html_url}>
                            <Card key={repositorio.id} >
                                <h3>{repositorio.name}</h3>
                                <h4>{repositorio.description}</h4>
                                <IconsDiv>
                                    <h4><FaRegStar style={{ color: `${colors.yellow}` }} />{repositorio.stargazers_count} -  {repositorio.language}</h4>
                                    <h5><FaUnlock style={{ color: `green` }} /> <FaLock style={{ color: `red` }} /></h5>
                                </IconsDiv>
                            </Card>
                        </a>
                    ))}

                </ul>
            </CorpoRepositorios>
        </>
    )
}

