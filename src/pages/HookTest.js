import React, { useState, useEffect, useContext, useRef } from 'react';

const themes = {
    dark: {
        foreground: "#ffffff",
        background: "#333333",
    },
    light: {
        foreground: "#ffffff",
        background: "#222222",
    },
};

function ContextTestOne() {
    return (
        <ContextTestTwo></ContextTestTwo>
    )
}

function ContextTestTwo() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            contextTestTwo
        </button>
    )
}

function personReducer(state, action) {
    switch (action.type) {
        case 'age':
            return { ...state, age: 26 };
        case 'name':
            return { ...state, name: 'jhon' }
        default:
            return state;
    }
}

function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}

const ThemeContext = React.createContext(themes.light);

function HookTest() {
    const [count, setCount] = useState(() => {
        return 0;
    });

    useEffect(() => {
        console.log('初次渲染或者更新');
        document.title = `点击了${count}次`;
        return () => {
            console.log('清除前一次的effec');
        }
    }, [count]);

    const add = (c) => c + 1;

    const [person, dispatch] = useReducer(personReducer, { name: 'zl', age: '25' });

    const btnEl = useRef(null);
    useEffect(() => {
        console.log(btnEl.current.innerHTML);
    }, [btnEl]);

    return (
        <div>
            <p>我被点击了{count}次</p>
            <button onClick={() => setCount(0)}>重置</button>
            <br />
            <button onClick={() => setCount(add)}>+1</button>
            <br />
            <button onClick={() => setCount(count)}>一样的值</button>
            <br />
            <ThemeContext.Provider value={themes.dark}>
                <ContextTestOne></ContextTestOne>
            </ThemeContext.Provider>

            <div>
                my name is {person.name}
                <br />
                my age is {person.age}
            </div>

            <div>
                <button onClick={() => dispatch({ type: 'name' })}>name: jhon</button>
            </div>

            <div>
                <button ref={btnEl} onClick={() => dispatch({ type: 'age' })}>age: 26</button>
            </div>
        </div>
    )
}

export default HookTest;