// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';


// parent to child--------------------------------------------------------------------------
function ParentComponent() {
    const message = {
        0: "done",
        2: "hello"
    };

    return (
        <div>
            {/* Pass the 'message' prop to ChildComponent */}
            <ChildComponent message={message} />
        </div>
    );
}

// child to parent--------------------------------------------------------------------------

// function ParentComponent() {
//     const [messageFromChild, setMessageFromChild] = useState('');

//     // Function to receive data from the child
//     const handleChildData = (data) => {
//         setMessageFromChild(data);
//     };

//     return (
//         <div>
//             <p>Message from Child: {messageFromChild}</p>

//             {/* Pass the 'handleChildData' function to ChildComponent */}
//             <ChildComponent sendDataToParent={handleChildData} />
//         </div>
//     );
// }



export default ParentComponent;
