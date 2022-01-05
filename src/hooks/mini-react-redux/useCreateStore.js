import React from "react";
import { useRef } from "react";

export const ReduxContext = React.createContext(null);

/* 用于产生 reduxHooks 的 store */
export function useCreateStore(reducer, initState) {
  const store = useRef(null);
  if (!store.current) {
    store.current = new ReduxHooksStore(reducer, initState).exportStore();
  }
  return store.current;
}
