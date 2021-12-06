import { useState, useRef } from 'react';

const useSyncState = (defaultValue) => {
  const value = useRef(null);
  const [, forceUpdate] = useState(defaultValue);
  const dispatch = (fn) => {
    if (typeof fn === 'function') {
      value.current = fn(defaultValue);
    } else {
      value.current = fn;
    }
    forceUpdate({});
  }

  return [value, dispatch]
};

export default useSyncState;