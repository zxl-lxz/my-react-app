// import download from 'downloadjs';
import React, { useRef } from 'react';
import Form from './Form';
import FormItem from './FormItem';
import Input from './Input';

const PropsTest = () => {
    const form = useRef(null);
    const submit = () => {
        form.current.submitForm((formValue)=>{
            console.log(formValue)
        })
    }
    const reset = () => {
        form.current.resetForm();
    }
    return (
        <div>
            <Form ref={form}>
                <FormItem name="name" label="姓名">
                    <Input />
                </FormItem>
                <FormItem name="age" label="年龄">
                    <Input />
                </FormItem>
                <input placeholder="hhhhh" />
                <Input />
            </Form>
            <div className="btns" >
                <button className="searchbtn"  onClick={ submit } >提交</button>
                <button className="concellbtn" onClick={ reset } >重置</button>
            </div>
        </div>
    );
};

export default PropsTest;