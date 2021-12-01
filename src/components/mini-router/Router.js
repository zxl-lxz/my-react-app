import React, { createContext, useEffect, useMemo, useState } from "react";
import { createBrowserHistory as createHistory } from 'history';

export const RouterContext = createContext();

// 为什么要将 createHistory() 的值赋值给这个全局变量呢？
export let rootHistory = null;

const Router = (props) => {
  const history = useMemo(() => {
    rootHistory = createHistory();
    return rootHistory;
  }, []);
  const [ location, setLocation ] = useState(history.location);
  useEffect(() => {
    const unlisten = history.listen((location) => {
      setLocation(location);
    });
    return () => {
      unlisten && unlisten();
    }
  }, []);
  const match = {
    path: '/',
    url: '/',
    params: {},
    isExact: location.pathname === '/',
  };
  return (
    <RouterContext.Provider
      value={{
        location,
        history,
        match,
      }}
    >
      {props.children}
    </RouterContext.Provider>
  )
}

export default Router;