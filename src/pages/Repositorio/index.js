import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../api/api';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';
import { Card, CorpoRepositorios, Header } from './styles';

export default function PaginaRepositorio() {
    const { usuario, setUsuario } = useAuth();
    const [repositorio, setRepositorio] = useState();
    const { rota, setRota } = useRoute();

    let history = useHistory();

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get("/users/RodrigoRVSN/repos");
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
                <h4>{usuario.name}</h4>
            </Header>

            <CorpoRepositorios>
                <ul>

                    {repositorio?.map((repositorio) => (
                        <Card key={repositorio.id} >
                            <h2>{repositorio.name}</h2>
                            <h3>{repositorio.description}</h3>
                            <h4>{repositorio.stargazers_count}</h4>
                            {/* colocar icones  star locked e unlocked */}
                        </Card>
                    ))}

                </ul>
            </CorpoRepositorios>
        </>
    )
}

