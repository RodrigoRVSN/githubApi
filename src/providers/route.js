import React, { useState } from 'react';

export const RouthContext = React.createContext({});

export const RouthProvider = (props) => {
    const [route, setRoute] = useState(false);

    return (
        <RouthContext.Provider value={{ route, setRoute }}>
            {props.children}
        </RouthContext.Provider>
    );
};

export const useRoute = () => React.useContext(RouthContext);