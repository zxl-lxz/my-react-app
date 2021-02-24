import React, { useState, useEffect, useContext, useRef, Profiler } from 'react';

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

    const callBack = (
        id, // 发生提交的 Profiler 树的 “id”
        phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        actualDuration, // 本次更新 committed 花费的渲染时间
        baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
        startTime, // 本次更新中 React 开始渲染的时间
        commitTime, // 本次更新中 React committed 的时间
        interactions // 属于本次更新的 interactions 的集合
    ) => {
        console.log(id);
        console.log(phase);
        console.log(actualDuration);
        console.log(baseDuration);
        console.log(startTime);
        console.log(commitTime);
        console.log(interactions);
    }

    return (
        <Profiler id="hookTest" onRender={callBack}>
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

        </Profiler>
    )
}

export default HookTest;