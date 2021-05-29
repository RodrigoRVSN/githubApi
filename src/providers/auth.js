import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [usuario, setUsuario] = useState({
        name: '',
        avatar_url: ''
    });

    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);