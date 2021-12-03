import React from 'react';

const Label = ({
  height,
  label,
  labelWidth,
  children,
  required,
}) => {
  return (
    <div
      className="form-label"
      height={{height: height + 'px'}}
    >
      <div className="form-label-name" width={{width: labelWidth + 'px'}}>
        {required ? <span style={{ color:'red' }} >*</span> : null}
        {label}:
      </div>
      {children}
    </div>
  );
};

export default Label;