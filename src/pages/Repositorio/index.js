import React from 'react';
import { api } from '../../api/api';
import { useAuth } from '../../providers/auth';

export default function PaginaInicio() {
    const { usuario, setUsuario } = useAuth();

    return (
        <>
            <h2>{usuario.name}</h2>
            <img src={usuario.avatar_url}></img>
        </>
    )
}

