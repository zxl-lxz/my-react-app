import { HashRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const PropsTest = lazy(() => import('../pages/PropsTest/index.jsx'));
const RefTest2 = lazy(() => import('../pages/RefTest/index.jsx'));
const RenderTest = lazy(() => import('../pages/renderTest/RenderTest'));
const TimeSlice = lazy(() => import('../pages/TimeSlice/Index.jsx'));
const EventTest = lazy(() => import('../pages/eventTest/EventTest'));
const ReactTopApiTest = lazy(() => import('../pages/ReactTopAPITest'));
const HooksTest = lazy(() => import('../pages/hooksTest'));

const BasicRoute = () => {
    return (
        <HashRouter>
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route exact path="/propsTest" component={PropsTest} />
                    <Route exact path="/refTest2" component={RefTest2} />
                    <Route exact path="/renderTest" component={RenderTest} />
                    <Route exact path="/timeSlice" component={TimeSlice} />
                    <Route exact path="/eventTest" component={EventTest} />
                    <Route exact path="/reactTopAPITest" component={ReactTopApiTest} />
                    <Route exact path="/hookstest" component={HooksTest} />
                </Switch>
            </Suspense>
        </HashRouter>
    )
}

export default BasicRoute;