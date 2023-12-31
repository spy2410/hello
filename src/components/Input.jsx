// B
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInputValue } from "../redux/store";

const Input = () => {
    const dispatch = useDispatch();
    const inputValue = useSelector((state) => state.input.inputValue);

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(updateInputValue(value));
    };

    const containerStyles = {
        textAlign: 'center',
        margin: 'auto',
        marginTop: '20px',
    };

    const inputStyles = {
        padding: '10px',
        fontSize: '16px',
        marginBottom: '10px',
    };


    return (
        <div style={containerStyles}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Type something:</label>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                style={inputStyles}
            />
        </div>
    );
};

export default Input;
