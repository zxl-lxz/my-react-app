import React from 'react';

class Child extends React.Component {
    myRef = null;
    setInputRef = (element) => {
        this.myRef = element;
    }
    focusInput() {
        this.myRef.focus();
    }
    render() {

        return (
            <input ref={this.setInputRef} type="text" />
        )
    }
}

export default Child;