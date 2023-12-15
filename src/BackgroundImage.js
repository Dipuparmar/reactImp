import React from 'react';
import backgroundImage from './Photos/logo192.png';
// image always taken in src !!
const BackgroundImage = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // Add more styles as needed
        width: '100%',
        height: '400px', // Set the height as per your requirement
    };

    return (
        <div style={divStyle}>
            {/* Your component content goes here */}
            <h1>Hello, World!</h1>
        </div>
    );
};

export default BackgroundImage;
