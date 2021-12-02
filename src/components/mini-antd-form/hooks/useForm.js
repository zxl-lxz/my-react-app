import { useRef } from "react";
import FormStore from "../FormStore";

const useForm = (form, defaultFieldsValue) => {
  const formRef = useRef(null);
  if (form) {
    formRef.current = form;
  } else {
    const formInstance = new FormStore(defaultFieldsValue);
    formRef.current = formInstance.getForm();
  }
  return formRef.current;
};

export default useForm;