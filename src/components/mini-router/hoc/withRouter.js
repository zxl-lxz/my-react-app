// 继承原始组件的静态熟悉
import hoistStatics from 'hoist-non-react-statics'
import React, { useContext } from 'react';
import { RouterContext } from '../Router';

const withRouter = (Component) => {
  const WrapComponent = (props) => {
    const context = useContext(RouterContext);
    return (
      <Component
        {...props}
        {...context}
      />
    )
  }
  return hoistStatics(WrapComponent, Component)
};

export default withRouter;