import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../api/api';
import { useAuth } from '../../providers/auth';
import { useRoute } from '../../providers/route';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Header } from '../../components/Header/styles';
import { CardComunity } from '../../components/CardComunity/styles';
import { ImgComunity } from '../../components/ImgComunity/styles';
import { BodyPage } from '../../components/BodyPage/styles';

export default function FollowersPage() {
    const { user } = useAuth();
    const [followers, setFollowers] = useState();
    const { setRoute } = useRoute();

    let history = useHistory();

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get(`/users/${user.login}/followers`);
                setFollowers(data);
            } catch (error) {
                console.log("Ocorreu um erro ao buscar os items: " + error);
            }
        }
        getItems();
    }, [user.login]);

    return (
        <>
            <Header>
                <Link to='/inicio' onClick={() => setRoute(history.location.pathname)}>
                    <FaArrowLeft />
                </Link>
                <h3>{followers?.length} followers</h3>
            </Header>

            <BodyPage>
                <ul>

                    {followers?.map((followers) => (
                        <CardComunity key={followers.id} >
                            <ImgComunity src={followers.avatar_url}></ImgComunity>
                            <h3>{followers.login}</h3>
                            <Link to='/outrousuario' onClick={() => localStorage.setItem('otherUser', followers.login)}>
                                <FaArrowRight />
                            </Link>
                        </CardComunity>
                    ))}

                </ul>
            </BodyPage>
        </>
    )
}

