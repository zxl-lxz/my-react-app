import React, { useEffect, useState } from "react";
import { ReduxContext } from "./useCreateStore";

export function useConnect(mapStoreToState) {
  /* 获取 store 内部的重要函数 */
  const contextValue = React.useContext(ReduxContext);
  const { getInitState , subscribe ,unSubscribe , dispatch } = contextValue;

  /* 用于传递给业务组件的 state  */
  const stateValue = React.useRef(getInitState(mapStoreToState));

  /* 渲染函数 */
  const [, forceUpdate] = useState();
  const connectValue = React.memo(() => {
    const state = {
      cacheState: stateValue.current,
      update: function(newState) {
        const selectState = mapStoreToState(newState);
        const isEqual = shallowEqual(state.cacheState, selectState);
        state.cacheState = selectState;
        stateValue.current = selectState;
        if (!isEqual) {
          forceUpdate();
        }
      }
    }
    return state;
  }, [contextValue]);

  useEffect(() => {
    const name = subscribe(connectValue);
    return function() {
      unSubscribe(name);
    }
  }, [connectValue]);

  return [stateValue.current, dispatch];
}
