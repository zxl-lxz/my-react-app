import { HashRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Calculate = lazy(() => import('../pages/Calculate'));
const KeyTest = lazy(() => import('../pages/KeyTest'));
const BoilingVerdict = lazy(() => import('../pages/Boling'));
const HookTest = lazy(() => import('../pages/HookTest'));
const RefTest = lazy(() => import('../pages/refTest'));
const EffectTest = lazy(() => import('../pages/effectTest'));
const JsxTest = lazy(() => import('../pages/JSXTest.jsx'));
const StateTest = lazy(() => import('../pages/StateTest.jsx'));
const UseStateTest = lazy(() => import('../pages/useStateTest.jsx'));
const PropsTest = lazy(() => import('../pages/PropsTest/index.jsx'));
const RefTest2 = lazy(() => import('../pages/RefTest/index.jsx'));
const RenderTest = lazy(() => import('../pages/renderTest/RenderTest'));
const TimeSlice = lazy(() => import('../pages/TimeSlice/Index.jsx'));

// import Calculate from '../pages/Calculate';
// import KeyTest from '../pages/KeyTest';
// import BoilingVerdict from '../pages/Boling';
// import HookTest from '../pages/HookTest';

const BasicRoute = () => {
    return (
        <HashRouter>
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Calculate} />
                    <Route exact path="/keyTest" component={KeyTest} />
                    <Route exact path="/boilingVerdict" component={BoilingVerdict} />
                    <Route exact path="/hookTest" component={HookTest} />
                    <Route exact path="/refTest" component={RefTest} />
                    <Route exact path="/effectTest" component={EffectTest} />
                    <Route exact path="/jsxTest" component={JsxTest} />
                    <Route exact path="/stateTest" component={StateTest} />
                    <Route exact path="/useStateTest" component={UseStateTest} />
                    <Route exact path="/propsTest" component={PropsTest} />
                    <Route exact path="/refTest2" component={RefTest2} />
                    <Route exact path="/renderTest" component={RenderTest} />
                    <Route exact path="/timeSlice" component={TimeSlice} />
                </Switch>
            </Suspense>
        </HashRouter>
    )
}

export default BasicRoute;