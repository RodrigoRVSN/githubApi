import React, { useState } from 'react';
import { Body, Input, Button, Obrigatorio } from './styles';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

import colors from '../../colors.json';
import { useAuth } from '../../providers/auth';
import { api } from '../../api/api';
import { useHistory } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRoute } from '../../providers/route';

export default function Login() {
    const { setUser } = useAuth();
    const { setRoute } = useRoute();
    const [name, setName] = useState('');
    const [valid, setValid] = useState(false);

    let history = useHistory();

    function handleChange(e) {
        setName(e.target.value);
        (e.target.value !== '') ? setValid(true) : setValid(false);
    }

    async function Entrar() {
        await api.get(`users/${name}`)
            .then((response) => {
                setUser(response.data)
                localStorage.setItem('userKey', name)
                history.push('/inicio')
                setRoute(history.location.pathname)
            }
            )
            .catch((err) => {
                history.push('/');
                toast.error('Usuário não encontrado! ' + err);
            });

    }

    return (
        <>
            <ToastContainer />
            <Body>
                <FaGithub size={90} color={colors.yellow} />
                <Input placeholder="Usuário" onChange={handleChange} />
                <Obrigatorio hidden={valid}>Campo obrigatorio!</Obrigatorio>
                <Button onClick={Entrar} disabled={!valid} >ENTRAR <FaArrowRight /></Button>
            </Body>
        </>
    )
}

