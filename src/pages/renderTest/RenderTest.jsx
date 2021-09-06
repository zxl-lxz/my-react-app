import React, { useState } from 'react';
import Children from './Children';

const RenderTest = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const changeNUm1 = () => {
        setNum1(count => count + 1);
    }
    const changeNUm2 = () => {
        setNum2(count => count + 1);
    }
    return (
        <div>
            {/* {useMemo(() => <Children num1={num1} />, [num1])} */}
            <Children num1={num1} />
            <div>{num1}</div>
            <div>{num2}</div>
            <button onClick={changeNUm1}>click1</button>
            <button onClick={changeNUm2}>click2</button>
        </div>
    );
};

export default RenderTest;