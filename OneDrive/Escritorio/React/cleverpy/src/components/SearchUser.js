import React, { useState } from 'react';

export const SearchUser = ({setUserId}) => {
    
    const [input, setInput] = useState(''); 
    
    const handleInput = (e) => {
        setInput(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserId(input);
    }; 

    return (
        <form onSubmit={handleSubmit}>
            <h4>Introduce la ID del usuario</h4>
            <input
                type="text"
                placeholder="1-10"
                value={input}
                onChange={handleInput}
            />
        </form>
    )
}
