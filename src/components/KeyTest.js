import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addList } from '../store/actions'

class KeyTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 'a',
        };
        this.dispatch = this.props.dispatch;
    }
    add() {
        this.setState((preState) => (
            {
                count: `${preState.count}a`,
            }
        ), () => {
            this.dispatch(addList(this.state.count));
        });
    }
    render() {
        return (
            <Fragment>
                {this.props.lists.map((item, index) => {
                    return (
                        <input key={item} placeholder={item} type="text" id={item} />
                    )
                })}
                <button onClick={this.add.bind(this)}>添加</button>
            </Fragment>
        );
    }
}

const getLists = (state) => {
    return {
        lists: state.lists,
    }
}
export default connect(getLists)(KeyTest);