import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
export const MyContext = createContext('Default Value');

// Export a custom provider component
export const MyContextProvider = ({ children }) => {
    const [contextValue, setContextValue] = useState('Initial Value');

    return (
        <MyContext.Provider value={{ contextValue, setContextValue }}>
            {children}
        </MyContext.Provider>
    );
};
