import React, {useState} from 'react';
import Dots from './Dots';

const Index = () => {
    const [show, setShow] = useState(false)
    const [ btnShow, setBtnShow ] = useState(true)
    const handleClick=()=>{
        setBtnShow(false);
        setTimeout(()=>{ setShow(true) }, 0);
    } 
    return (
        <div>
            { btnShow &&  <button onClick={handleClick} >show</button> } 
            { show && <Dots />  }
        </div>
    );
};

export default Index;