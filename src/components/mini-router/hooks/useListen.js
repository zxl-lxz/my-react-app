// 不在 Router 包裹中的组件，可以监听路由变化
// useListen((location) => {})

import { useEffect } from 'react';
import { rootHistory } from '../Router';

const useListen = (callback) => {

  useEffect(() => {
    if (!rootHistory) {
      return null;
    }
    const unlisten = rootHistory.listen((location) => {
      callback && callback(location);
    });
    return () => {
      unlisten && unlisten();
    }
  }, []);

};

export default useListen;