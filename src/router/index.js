import { HashRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Calculate = lazy(() => import('../pages/Calculate'));
const KeyTest = lazy(() => import('../pages/KeyTest'));
const BoilingVerdict = lazy(() => import('../pages/Boling'));
const HookTest = lazy(() => import('../pages/HookTest'));
const RefTest = lazy(() => import('../pages/refTest'));
const EffectTest = lazy(() => import('../pages/effectTest'));
const JsxTest = lazy(() => import('../pages/JSXTest.jsx'));

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
                </Switch>
            </Suspense>
        </HashRouter>
    )
}

export default BasicRoute;