import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const useStateTest = () => {
    const [ number , setNumber ] = useState(0);
    useEffect(() => {
        console.log('监听number变化，此时的number是:  ' + number )
    }, [number]);
    const handleCilck = () => {
        /** 高优先级更新 **/
        ReactDOM.flushSync(()=>{
            setNumber(2) 
        })
        /* 批量更新 */
        setNumber(1) 
        /* 滞后更新 ，批量更新规则被打破 */
        setTimeout(()=>{
            setNumber(3) 
        })
    }
    console.log(number);
    return (
        <div>
            {number}
            <button onClick={handleCilck}>click</button>
        </div>
    );
};

export default useStateTest;