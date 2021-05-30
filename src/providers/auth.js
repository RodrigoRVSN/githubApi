import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        login: `${localStorage.getItem('userKey')}`,
        name: '',
        avatar_url: '',
        email: '',
        location: '',
        company: '',
        bio: '',
        followers_url: '',
        following_url: '',
        organizations_url: '',
        starred_url: '',
        public_repos: '',
        public_gists: '',
        followers: '',
        following: '',
        repos_url: ''
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);