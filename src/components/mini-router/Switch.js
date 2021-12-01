import React, { cloneElement, useContext } from 'react';
import { matchPath } from 'react-router';
import { RouterContext } from './Router';

const Switch = (props) => {
  const context = useContext(RouterContext);
  const location = props.location || context.location;
  // 遍历 Switch 的 chliden 找到匹配的那一个 
  let children = null;
  let match = null;
  React.Children.forEach(props.children, (child) => {
    if (!match && React.isValidElement(child)) {
      children = child;
      const path = child.props.path;
      match = path ? matchPath(location.pathname, {...child.props}) : context.match;
    }
  });

  return match ? cloneElement(children, {location, computedMatch: match}) : null;
}

export default Switch;