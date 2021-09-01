import React, { Component } from 'react';
import Children from './Children';

class RefTest extends Component {
    state = {
        num: 0,
    };
    node = null;
    componentDidMount() {
        console.log(this.refs);
    }

    render() {
        return (
            <div>
                <div ref="currentDom"></div>
                <Children ref="currentComInstance"></Children>
                <div ref={(node) => {
                    this.node = node;
                    console.log(this.node);
                }}></div>
                <button onClick={() => this.setState({num: this.state.num + 1})}>click</button>
            </div>
        );
    }
}

export default RefTest;