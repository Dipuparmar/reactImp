// multiple use state 

// import React, { useState } from 'react';

// function ExampleComponent() {
//     // Define multiple state variables using useState
//     const [count, setCount] = useState(0); // Example state for count
//     const [text, setText] = useState(''); // Example state for text input
//     const [isVisible, setIsVisible] = useState(true); // Example state for visibility

//     // You can use these state variables and their corresponding updater functions in your component logic

//     const handleIncrement = () => {
//         setCount(count + 1);
//     };

//     const handleInputChange = (event) => {
//         console.log(event.target.value)
//         setText(event.target.value);
//     };

//     const toggleVisibility = () => {
//         setIsVisible(!isVisible);
//     };

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={handleIncrement}>Increment</button>

//             <p>Text: {text}</p>
//             <input type="text" value={text} onChange={handleInputChange} />

//             <p>Visibility: {isVisible ? 'Visible' : 'Hidden'}</p>
//             <button onClick={toggleVisibility}>
//                 {isVisible ? 'Hide' : 'Show'}
//             </button>
//         </div>
//     );
// }

// export default ExampleComponent;

// -----------------------------------------------------------------------------------------------
// multiple use state using usereducer hook

import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
    count: 0,
    text: '',
    isVisible: true
};

// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'SET_TEXT':
            return { ...state, text: action.payload };
        case 'TOGGLE_VISIBILITY':
            return { ...state, isVisible: !state.isVisible };
        default:
            return state;
    }
};

function ExampleComponent() {
    // Use useReducer to manage multiple state variables
    const [state, dispatch] = useReducer(reducer, initialState);

    // You can use the state variables and the dispatch function in your component logic

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const handleInputChange = (event) => {
        dispatch({ type: 'SET_TEXT', payload: event.target.value });
    };

    const toggleVisibility = () => {
        dispatch({ type: 'TOGGLE_VISIBILITY' });
    };

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={handleIncrement}>Increment</button>

            <p>Text: {state.text}</p>
            <input type="text" value={state.text} onChange={handleInputChange} />

            <p>Visibility: {state.isVisible ? 'Visible' : 'Hidden'}</p>
            <button onClick={toggleVisibility}>
                {state.isVisible ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default ExampleComponent;
