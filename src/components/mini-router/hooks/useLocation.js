import { useContext } from 'react';
import { RouterContext } from '../Router';

const useLocation = () => {
  const context = useContext(RouterContext);
  return context.location;
};

export default useLocation;