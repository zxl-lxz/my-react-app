import React, { cloneElement, isValidElement, useContext, useEffect, useMemo, useState } from 'react';
import FormContext from './context/FormContext';
import Label from './Label';
import Message from './Message';

const FormItem = ({
  name,
  label,
  labelWidth,
  children,
  height = 50,
  required = false,
  trigger = 'onChange',
  validateTrigger = 'onChange',
  rules = {},
}) => {
  const formInstance = useContext(FormContext);
  const { registerValidateFields, unRegisterValidate, getFieldModel, dispatch } = formInstance;

  const [ , forceUpdate] = useState();

  const onStoreChange = useMemo(() => {
    return {
      changeValue() {
        forceUpdate();
      }
    };
  }, []);

  useEffect(() => {
    name && registerValidateFields(name, onStoreChange, {...rules, required});
    return () => {
      name && unRegisterValidate(name);
    }
  }, []);

  // props 传递，让表单控件完全受控
  const getControlled = (child) => {
    const props = {...child.props};
    if (!name) return props;

    const handleChange = (e) => {
      const value = e.target.value;
      dispatch('setFieldValue', name, value);
    }
    props[trigger] = handleChange;

    if (required || rules) {
      props[validateTrigger] = (e) => {
        if (trigger === validateTrigger) {
          handleChange(e);
        }
        dispatch('validateFieldValue', name, true);
      }
    }
    props.value = dispatch('getFieldValue', name);
    return props;
  }

  let renderChildren = null;
  if (isValidElement(children)) {
    renderChildren = cloneElement(children, getControlled(children))
  } else {
    renderChildren = children;
  }

  return (
    <Label
      height={height}
      label={label}
      labelWidth={labelWidth}
      required={require}
    >
      {renderChildren}
      <Message
        name={name}
        {...getFieldModel(name)}
      />
    </Label>
  );
};

export default FormItem;