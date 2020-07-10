import React, { useState, useEffect } from 'react'

function HookTest() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `我被点击了${count}次`;
    });

    return (
        <div>
            <p>我被点击了{count}次</p>
            <button onClick={() => setCount(count + 1)}>点击+1</button>
        </div>
    )
}

export default HookTest;