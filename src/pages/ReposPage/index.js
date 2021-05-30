import React, { useEffect, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { api } from '../../api/api';

import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';

import { Card, IconsDiv } from './styles';
import { Header } from '../../components/Header/styles';
import { FaLock, FaRegStar, FaUnlock, FaArrowLeft } from 'react-icons/fa';

import colors from '../../colors.json';
import { BodyPage } from '../../components/BodyPage/styles';

export default function ReposPage() {
    const { user } = useAuth();
    const [repos, setRepos] = useState();
    const { setRoute } = useRoute();

    let history = useHistory();

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get(`/users/${user.login}/repos`);
                setRepos(data);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os items: " + error);
            }
        }
        getItems();
    }, [user]);

    return (
        <>
            <Header>
                <Link to='/inicio' onClick={() => setRoute(history.location.pathname)}>
                    <FaArrowLeft />
                </Link>
                <h3>{repos?.length} repositórios</h3>
            </Header>

            <BodyPage>
                <ul>
                    {repos?.map((repos, index) => (
                        <Card key={index} >
                            <a target="_blank" rel="noreferrer" href={repos.html_url}>
                                <h3>{repos.name}</h3>
                                <h4>{repos.description}</h4>
                                <IconsDiv>
                                    <h4><FaRegStar style={{ color: `${colors.yellow}` }} />{repos.stargazers_count} -  {repos.language}</h4>
                                    <h5><FaUnlock style={{ color: `green` }} /> <FaLock style={{ color: `red` }} /></h5>
                                </IconsDiv>
                            </a>
                        </Card>
                    ))}

                </ul>
            </BodyPage>
        </>
    )
}

