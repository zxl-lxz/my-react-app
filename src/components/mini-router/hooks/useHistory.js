import { useContext } from 'react';
import { RouterContext } from '../Router';

// const history = useHistory();

const useHistory = () => {
  const context = useContext(RouterContext);
  return context.history;
};

export default useHistory;