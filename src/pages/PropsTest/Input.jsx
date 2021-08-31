import React from 'react';

const Input = ({onChange, value}) => {
    return (
        <input onChange={(e) => onChange(e.target.value)} value={value} />
    );
};

Input.displayName = 'input';

export default Input;