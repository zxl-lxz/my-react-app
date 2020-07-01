import React, { Component, Fragment } from 'react';

class KeyTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['a', 'b', 'c'],
        };
    }
    add() {
        this.setState((preState) => ({ lists: ['d', ...preState.lists] }));
    }
    render() {
        return (
            <Fragment>
                {this.state.lists.map((item, index) => {
                    return (
                        <input key={item} placeholder={item} type="text" id={item} />
                    )
                })}
                <button onClick={this.add.bind(this)}>添加</button>
            </Fragment>
        );
    }
}

export default KeyTest;