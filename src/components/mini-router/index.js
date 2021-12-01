import Router, { RouterContext } from "./Router";
import Route from "./Route";
import Switch from "./Switch";

import useHistory from "./hooks/useHistory";
import useListen from "./hooks/useListen";
import useLocation from "./hooks/useLocation";

import withRouter from "./hoc/withRouter";

export {
  RouterContext,
  Router,
  Route,
  Switch,
  useHistory,
  useLocation,
  useListen,
  withRouter
}
