import React, { useState, useEffect, useRef } from 'react';

function EffectTest() {
    const [count, setCount] = useState(0);
    console.log(count);
    setTimeout(() => {
        setCount(1);
    });
    return (
        <div>
            <span>{count}</span>
        </div>
    )
}
export default EffectTest;