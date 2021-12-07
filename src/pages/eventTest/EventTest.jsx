import React, { useState } from 'react';
import useLog, { LogContext } from '../../hooks/useLog';

const EventTest = () => {
  const [dom, exportMessage] = useLog();
  const [message] = useState('message');
  const handleClick1 = () => console.log(exportMessage);
  const handleClick2 = () => console.log(2);
  const handleClick3 = () => console.log(3);
  const handleClick4 = () => console.log(4);
  return (
    <LogContext.Provider value={message}>
      <div ref={dom} onClick={handleClick3} onClickCapture={handleClick4}>
        <button onClick={handleClick1} onClickCapture={handleClick2}>点击</button>
      </div>
    </LogContext.Provider>
  );
};

export default EventTest;
