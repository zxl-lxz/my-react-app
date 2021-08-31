import React, { Component } from 'react';

class Form extends Component {
    state = {
        formValues: {},
    };
    submitForm = (cb) => {
        cb(this.state.formValues)
    }
    setValue = (name, value) => {
        this.setState(preState => {
            return {
                formValues: {
                    ...preState.formValues,
                    [name]: value,
                }
            }
        });
    }
    resetForm = () => {
        const {formValues} = this.state;
        Object.keys(formValues).forEach(name => {
            formValues[name] = '';
        })
        this.setState({
            formValues,
        });
    }
    render() {
        const { children } = this.props;
        const renderChidlren = [];
        React.Children.forEach(children, (child) => {
            if (child.type.displayName === 'formItem') {
                const {name} = child.props;
                const Children = React.cloneElement(child, {
                    key: name,
                    handleChange: this.setValue,
                    value: this.state.formValues[name],
                })
                renderChidlren.push(Children);
            }
        })
        return renderChidlren;
    }
}

Form.displayName = 'form'

export default Form;