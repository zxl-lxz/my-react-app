import React, { createElement, useContext, useMemo } from "react";
import { matchPath } from "react-router";
import { RouterContext } from "./Router";

const Route = (props) => {
  const context = useContext(RouterContext);
  const location = props.location || context.location;

  // 是否匹配当前路由
  const isMatch = useMemo(() => {
    if (props.computedMatch) {
      return props.computedMatch;
    }
    return props.path ? matchPath(location.pathname, props) : context.match;
  }, [context.match, props, location.pathname]);
  const match = isMatch();

  // 传递给嵌套路由
  const newRouterProps = {...context, location, match};
  let { component, children, render } = props;
  if (Array.isArray(children) && children.length === 0) {
    children = null;
  }
  let renderChildren = null;
  if (match) {
    if (children) {
      renderChildren = typeof children === 'function' ? children(newRouterProps) : children;
    }
    else if (component) {
      renderChildren = createElement(component, newRouterProps);
    }
    else if (render) {
      renderChildren = render(newRouterProps);
    }
  }

  return (
    <RouterContext.Provider
      value={newRouterProps}
    >
      {renderChildren}
    </RouterContext.Provider>
  )
}

export default Route;