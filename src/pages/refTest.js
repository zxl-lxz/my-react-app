import React, { useRef, useEffect, useState } from 'react';
// import Child from './Child';

function Test(props) {
    const ref = useRef(0);
    const [count, setCount] = useState(ref.current);
    useEffect(() => {
        ref.current = count;
    }, [count]);
    const changeCount = () => {
        setCount(2);
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={changeCount}>change count</button>
        </div>
    )
}

export default Test;