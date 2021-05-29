import React, { useState } from 'react';
import { FaGithub, FaHome, FaUsers } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { DivIcon, Navbar } from './styles';

import colors from '../../colors.json';
import { useRoute } from '../../providers/route';

const Footer = () => {
    const { rota, setRota } = useRoute();

    let history = useHistory();

    return (
        <>
            <Navbar>
                <DivIcon >
                    <Link to='/inicio' onClick={() => setRota(history.location.pathname)} style={(history.location.pathname === '/inicio') ? { color: `${colors.dark_black}` } : { color: `${colors.dark_gray}` }}>
                        <FaHome />
                        <h3>Home</h3>
                    </Link>
                </DivIcon>
                <DivIcon>
                    <Link to='/repositorio' onClick={() => setRota(history.location.pathname)} style={(history.location.pathname === '/repositorio') ? { color: `${colors.dark_black}` } : { color: `${colors.dark_gray}` }}>
                        <FaGithub />
                        <h3>Repos</h3>
                    </Link>
                </DivIcon>
                <DivIcon >
                    <Link to='/seguidores' onClick={() => setRota(history.location.pathname)} style={(history.location.pathname === '/seguidores') ? { color: `${colors.dark_black}` } : { color: `${colors.dark_gray}` }} >
                        <FaUsers />
                        <h3>Seguidores</h3>
                    </Link>
                </DivIcon >
                <DivIcon >
                    <Link to='/seguindo' onClick={() => setRota(history.location.pathname)} style={(history.location.pathname === '/seguindo') ? { color: `${colors.dark_black}` } : { color: `${colors.dark_gray}` }}>
                        <FaUsers />
                        <h3>Seguindo</h3>
                    </Link>
                </DivIcon>
            </Navbar>
        </>
    )
}

export default Footer;

