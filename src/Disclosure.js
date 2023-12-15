import React from 'react';
import { useDisclosure } from '@chakra-ui/react';

// useDisclosure is a custom hook used to help handle common open, close, or toggle scenarios 
// It can be used to control feedback component such as Modal, AlertDialog, Drawer, etc.

// isOpen	boolean	false	If true, it sets the controlled component to its visible state.
// onClose	function		Callback function to set a falsy value for the isOpen parameter.
// onOpen	function		Callback function to set a truthy value for the isOpen parameter.

export default function Disclosure() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <button onClick={onOpen}>Open Disclosure</button>

            {isOpen && (
                <div>
                    {/* Your disclosure content goes here */}
                    <p>This is the disclosed content.</p>
                    <button onClick={onClose}>Close Disclosure</button>
                </div>
            )}
        </div>
    )
}
