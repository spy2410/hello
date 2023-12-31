// C
import React from 'react';
import { useSelector } from 'react-redux';

const Output = () => {
    const inputValue = useSelector((state) => state.input.inputValue);

    const containerStyles = {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '20px',
        textAlign: 'center',
        margin: 'auto',
    };

    const textStyles = {
        fontSize: '18px',
    };

    return (
        <div style={containerStyles}>
            <p style={textStyles}>Value from Redux store: {inputValue}</p>
        </div>
    );
};

export default Output;
