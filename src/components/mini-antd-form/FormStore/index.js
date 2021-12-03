// 管理整个表单
/*  
    TODO: 数据结构
    model = {
       [name] ->  validate  = {
           value     -> 表单值    (可以重新设定)
           rule      -> 验证规则  ( 可以重新设定)
           required  -> 是否必添 -> 在含有 rule 的情况下默认为 true
           message   -> 提示消息
           status    -> 验证状态  resolve -> 成功状态 ｜reject -> 失败状态 ｜ pendding -> 待验证状态 |
       }
   }
*/

import { unstable_batchedUpdates } from "react-dom";

/* 对外接口  */
const formInstanceApi = [
  'getFieldModel',
  'setCallback',
  'dispatch',
  'registerValidateFields',
  'resetFields',
  'setFieldsValue',
  'setFieldValue',
  'getFieldsValue',
  'getFieldValue',
  'validateFields',
  'submit',
  'unRegisterValidate'
]

const isReg = (rule) => rule instanceof RegExp;

class FormStore {
  constructor(defaultFieldsValue) {
    // 保存每一个表单项的各种数据和状态
    this.model = {};

    // 保存每一个 FormItem 的更新函数
    this.control = {};

    // 保存注册在 Form 上的事件，比如提交成功 onFinish
    this.callback = {};

    // 表单验证，批量更新队列
    this.penddingValidateQueue = [];

    // 当前是否正在调度
    this.isSchedule = false;

    // 表单的默认值
    this.defaultFieldsValue = defaultFieldsValue;

  }

  getFieldModel(name) {
    const model = this.model[name];
    return model || {};
  }

  // 暴露 formInstanceApi 的所有方法
  getForm() {
    return formInstanceApi.reduce((acc, next) => {
      acc[next] = this[next].bind(this);
      return acc;
    }, {});
  }

  // format model
  static formatModel(validate){
    const { value, rule, required, message } = validate
    return {
        value,
        rule: rule || (() => true),
        required: required || false,
        message: message || '',
        status:'pendding'
    }
  }

  // 注册表单单元项
  registerValidateFields(name, control, model) {
    if (this.defaultFieldsValue[name]) {
      model.value = this.defaultFieldsValue[name];
    }
    const newModel = FormStore.formatModel(model);
    this.model[name] = newModel;
    this.control[name] = control;
  }

  // 卸载
  unRegisterValidate(name) {
    delete this.model[name];
    delete this.control[name]
  }

  // 暴露给 Form 设置 onFinish 和 onFinishFailed
  setCallback(callback) {
    callback && (this.callback = callback);
  }

  // 可以通过 dispatch 调用 FormStore 内部的方法
  dispatch(type, ...args) {
    if (!type) return;
    if (~formInstanceApi.indexOf(type)) {
      return this[type].bind(this)(...args);
    } else {
      throw new Error('no such method');
    }
  }

  setValueClearStatus(name, model, value) {
    model.value = value;
    model.status = 'pendding';
    this.notifyChages(name);
  }

  // 重置表单
  resetFields() {
    Object.entries(this.model).forEach((nameAndModel) => {
      const [name, model] = nameAndModel;
      this.setValueClearStatus(name, model, null);
    })
  }

  // 设置一组标单项的值
  setFieldValue(name, value) {
    const model = this.model[name];
    if (!model) return;

    if (typeof value === 'object') {
      Object.entries(value).forEach((keyAndValue) => {
        const [key, fieldValue] = keyAndValue;
        if (fieldValue) model[key] = fieldValue;
      });
      model.status = 'pendding';
      this.validateFieldValue(name, true);
    } else {
      this.setValueClearStatus(name, model, value);
    }
  }

  // 获取某一表单项的值
  getFieldValue(name) {
    const model = this.model[name];
    if (model) return model.value;
    if (this.defaultFieldsValue[name]) return this.defaultFieldsValue[name]
    return null;
  }

  // 获取全部表单的值
  getFieldsValue() {
    const result = {};
    Object.entries(this.model).forEach((nameAndModel) => {
      const [name, model] = nameAndModel;
      result[name] = model.value;
    });
    return result;
  }
  // 设置全部表单项的值
  setFieldsValue(obj) {
    if (typeof obj !== 'object') return;
    Object.entries(obj).forEach((nameAndValue) => {
      const [name, value] = nameAndValue;
      this.setFieldValue(name, value);
    })
  }

  // 通知对应表单项更新
  notifyChages(name) {
    const controller = this.control[name];
    if (controller) controller.changeValue();
  }

  // 批量调度验证更新任务
  scheduleValidate() {
    if (this.isSchedule) return;
    this.isSchedule = true;
    // 在一个异步函数里使用 unstable_batchedUpdates 开启 ReactDOM 提供的批量更新机制
    Promise.resolve().then(() => {
      unstable_batchedUpdates(() => {
        do {
          const notify = this.penddingValidateQueue.unshift();
          notify && notify();
        } while (this.penddingValidateQueue.length > 0);
        // 调度完毕
        this.isSchedule = false;
      });
    });
  }

  // 验证单个表单项
  validateFieldValue(name, force = false) {
    // 验证
    const model = this.model[name];
    if (!model) return null;
    const { rule, required, value } = model;
    let status = 'resolve';
    if (required && !value) {
      status = 'reject';
    }
    else if (isReg(rule)) {
      status = rule.test(value) ? 'resolve' : 'reject';
    }
    else if (typeof rule === 'function') {
      status = rule(value) ? 'resolve' : 'reject';
    }

    // 下发状态
    const preStatus = model.status;
    model.status = status;
    if (preStatus !== status || force) {
      const notify = this.notifyChages.bind(this, name);
      this.penddingValidateQueue.push(notify);
    }
    this.scheduleValidate();
    return status;
  }


  // 验证全部标单项
  validateFields(callback) {
    // 成功与否
    let status = true;

    Object.keys(this.model).forEach((name) => {
      const currentModelStatus = this.validateFieldValue(name, true);
      if (currentModelStatus === 'reject') status = false;
    })
    callback(status)
  }

  submit(cb) {
    this.validateFields((res) => {
      cb && cb(res);
      const { onFinish, onFinishFailed } = this.callback;
      if (!res) {
        (onFinishFailed && typeof onFinishFailed === 'function') && onFinishFailed();
      }
      (onFinish && typeof onFinish === 'function') && onFinish(res);
    })
  }
}

export default FormStore;