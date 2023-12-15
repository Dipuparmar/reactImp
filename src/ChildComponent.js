// ChildComponent.js
import React, { useState } from 'react';

// parent to child--------------------------------------------------------------------------
// function ChildComponent({message}) 
function ChildComponent(props) {
    // Access the 'message' prop
    const { message } = props;
    console.log(typeof (message))

    return (
        <div>
            <p>Message for key 1: {message[0]}</p>
            <p>Message for key 2: {message[2]}</p>
        </div>
    );
}



// child to parent--------------------------------------------------------------------------
// function ChildComponent(props) {
//     const [childMessage, setChildMessage] = useState('Hello from Child!');

//     // Function to send data to the parent
//     const sendToParent = () => {
//         // Call the function passed from the parent with the data
//         props.sendDataToParent(childMessage);
//     };

//     return (
//         <div>
//             <p>Child Message: {childMessage}</p>
//             <button onClick={sendToParent}>Send Data to Parent</button>
//         </div>
//     );
// }

export default ChildComponent;
