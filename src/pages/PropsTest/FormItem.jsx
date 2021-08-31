import React, { cloneElement, isValidElement } from 'react';

const FormItem = (props) => {
    const {children , name  , handleChange , value , label} = props;
    const onChange = (value) => {
        handleChange(name, value)
    }
    console.log(value);
    return (
        <div>
            <span>{label}</span>
            {
                isValidElement(children) && children.type.displayName === 'input'
                ? cloneElement(children, {onChange, value})
                : null
            }
        </div>
    );
};

FormItem.displayName = 'formItem';

export default FormItem;