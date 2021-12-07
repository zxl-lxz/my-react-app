import React, {
  useContext, useCallback, useEffect, useRef,
} from 'react';

export const logContext = React.createContext();

const useLog = () => {
  const dom = useRef(null);
  const message = useContext(logContext);

  const reportMessage = useCallback((element, type) => {
    if (type === 'click') {
      console.log('click', element, message);
    }
    if (type === 'pv') {
      console.log('pv', element, message);
    }
  }, [message]);

  useEffect(() => {
    const handleClick = (e) => {
      reportMessage(e.target, 'click');
    };
    if (dom.current) {
      dom.current.addEventListener('click', handleClick);
    }
  }, [reportMessage]);
  return [dom, reportMessage];
};

export default useLog;
