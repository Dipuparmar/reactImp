import React, { useContext } from 'react';
import { MyContext } from './MyContextProvider';

const MyComponent = () => {
    // Use useContext to access the context value
    const { contextValue, setContextValue } = useContext(MyContext);

    const handleClick = () => {
        // Update the context value
        setContextValue('New Value');
    };

    return (
        <div>
            <p>Context Value: {contextValue}</p>
            <button onClick={handleClick}>Change Context Value</button>
        </div>
    );
};

export default MyComponent;
