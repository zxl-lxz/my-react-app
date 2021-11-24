import React, { useState } from 'react';

const HooksTest = () => {
  console.log('run');
  const [ number , setNumber ] = useState(0)
  // const handleClick = () => {
  //     setNumber(num=> num + 1 ) // num = 1
  //     setNumber(num=> num + 2 ) // num = 3 
  //     setNumber(num=> num + 3 ) // num = 6
  // }
  const handleClick = () => {
    setNumber(number + 1 )
    setNumber(number + 2 )
    setNumber(number + 3 )
  }
  return (
    <div>
      <button onClick={() => handleClick() } >非函数更新。点击 { number } </button>
    </div>
  )
  
}

export default HooksTest;