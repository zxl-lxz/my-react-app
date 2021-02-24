import React, { Suspense } from 'react';
// import BoilingVerdict from './Boling';
import Temp from './Temp';

let b = {
    foo: [1, 2, 3],
};

const BoilingVerdict = React.lazy(() => import('./Boling'));

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            celsius: '',
            fahrenheit: '',
            a: {
                foo: [1, 2, 3],
            }
        };
    }
    handleCChange(temp, e) {
        this.setState({
            a: b,
        }, () => {
            let c = this.state.a;
            let arr = c.foo;
            arr.push(4);
            c.foo = [...arr];
        });
        this.setState({
            celsius: temp * 1,
            fahrenheit: ((temp * 9) / 5) + 32,
        });
    }
    handleFChange(temp, e) {
        this.setState({
            fahrenheit: temp * 1,
            celsius: ((temp - 32) * 5) / 9,
        });
    }

    static getDerivedStateFromProps(props, state) {
        // console.log(props, state);
        return {
            celsius: '',
            fahrenheit: '',
            a: {
                foo: [1, 2, 3],
            }
        };
    }

    render() {
        return (
            <div className="wrap">
                <Temp temp={this.state.celsius} handleChange={(e) => this.handleCChange(e)} />
                <Temp temp={this.state.fahrenheit} handleChange={(e) => this.handleFChange(e)} />
                <Suspense fallback={<div>...loading</div>}>
                    <BoilingVerdict celsius={this.state.celsius} />
                </Suspense>
                <span>{this.state.a.foo.length}</span>
            </div>
        )
    }
}

export default Calculator;
