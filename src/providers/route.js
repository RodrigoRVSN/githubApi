import React, { useState } from 'react';

export const RouthContext = React.createContext({});

export const RouthProvider = (props) => {
    const [rota, setRota] = useState(false);

    return (
        <RouthContext.Provider value={{ rota, setRota }}>
            {props.children}
        </RouthContext.Provider>
    );
};

export const useRoute = () => React.useContext(RouthContext);