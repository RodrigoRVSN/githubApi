import React, { useState } from 'react';
import { Body, Input, Button, Obrigatorio } from './styles';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

import colors from '../../colors.json';
import { useAuth } from '../../providers/auth';

export default function Inicio() {
    const { usuario, setUsuario } = useAuth();
    const [valido, setValido] = useState(false);

    function handleChange(e) {
        setUsuario({ name: e.target.value });
        (e.target.value !== '') ? setValido(true) : setValido(false);
    }

    return (
        <>
            <Body>
                <FaGithub size={90} color={colors.yellow} />
                <Input placeholder="Usuário" onChange={handleChange} />
                <Obrigatorio hidden={valido}>Campo obrigatorio!</Obrigatorio>
                <Button disabled={!valido} >ENTRAR <FaArrowRight /></Button>
            </Body>
        </>
    )
}

