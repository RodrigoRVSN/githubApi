import React from 'react';
import { api } from '../../api/api';
import { useAuth } from '../../providers/auth';

export default function PaginaInicio() {
    const { usuario, setUsuario } = useAuth();

    return (
        <>
            <h1>aa</h1>
        </>
    )
}

