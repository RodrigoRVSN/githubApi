import React, { useState } from 'react';
import { Body, Input, Button, Obrigatorio } from './styles';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

import colors from '../../colors.json';
import { useAuth } from '../../providers/auth';
import { api } from '../../api/api';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const { setUsuario } = useAuth();
    const [nome, setNome] = useState('');
    const [valido, setValido] = useState(false);

    let history = useHistory();

    function handleChange(e) {
        setNome(e.target.value);
        (e.target.value !== '') ? setValido(true) : setValido(false);
    }

    async function Entrar() {
        await api.get(`users/${nome}`)
            .then((response) => setUsuario(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
            
        localStorage.setItem('userKey', nome);
        history.push('/inicio');
    }


    return (
        <>
            <Body>
                <FaGithub size={90} color={colors.yellow} />
                <Input placeholder="Usuário" onChange={handleChange} />
                <Obrigatorio hidden={valido}>Campo obrigatorio!</Obrigatorio>
                <Button onClick={Entrar} disabled={!valido} >ENTRAR <FaArrowRight /></Button>
            </Body>
        </>
    )
}

