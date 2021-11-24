import React from 'react';

const ReactTopApiTest = () => {
    // 函数组件
    const component = (myprops) => (<button {...myprops}></button>);
    // 类组件
    class ClassComponent extends React.Component {
        render() {
            return (
                <div style={this.props.style}>
                    {this.props.text}
                    {this.props.children}
                </div>
            )
        }
    }
    const props = {
        style: {
            width: '120px',
            height: '80px',
        },
        text: '我是一个div',
    };
    const children = 'a btn text';
    const createFunEle = React.createElement(component, props, children);
    const createClassEle = React.createElement(ClassComponent, props, children);

    const theCloneElement = React.cloneElement(createClassEle, {
        text: '我是一个克隆元素',
    });
    return (
        <div>
            {createFunEle}
            {createClassEle}
            {theCloneElement}
        </div>
    );
};

export default ReactTopApiTest;