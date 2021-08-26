import React, { Component } from 'react';

import ReactDOM from 'react-dom';
// const { unstable_batchedUpdates } = ReactDOM

class StateTest extends Component {
    state = {
        number: 0,
    }
    // 批量更新
    // handleClick= () => {
    //     this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
    //     console.log(this.state.number)
    //     this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback2', this.state.number)  })
    //     console.log(this.state.number)
    //     this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
    //     console.log(this.state.number)
    // }

    //打破批量更新
    // handleClick = () => {
    //     setTimeout(()=>{
    //         this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
    //         console.log(this.state.number)
    //         this.setState({ number:this.state.number + 1 },()=>{    console.log( 'callback2', this.state.number)  })
    //         console.log(this.state.number)
    //         this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
    //         console.log(this.state.number)
    //     })
    // }

    // 手动批量更新
    // handleClick = () => {
    //     setTimeout(()=>{
    //         unstable_batchedUpdates(() => {
    //             this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
    //             console.log(this.state.number)
    //             this.setState({ number:this.state.number + 1 },()=>{    console.log( 'callback2', this.state.number)  })
    //             console.log(this.state.number)
    //             this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
    //             console.log(this.state.number)
    //         })
    //     })
    // }

    // 优先级
    // flushSync 中的 setState > 正常执行上下文中 setState > setTimeout ，Promise 中的 setState。
    handleClick = () => {
        setTimeout(() => {
            this.setState({number: 1})
        });
        this.setState({ number: 2  });

        // 获得较高更新优先级
        ReactDOM.flushSync(()=>{
            this.setState({ number: 3  })
        });

        this.setState({ number: 4  });
    }
    render() {
        console.log(this.state.number)
        return (
            <div>
                {this.state.number}
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default StateTest;
