import React from 'react';

class Temp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleChange(e) {
        this.props.handleChange(e.target.value);
    }
    render() {
        return (
            <div>
                <input value={this.props.temp} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}

export default Temp;