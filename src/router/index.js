import { HashRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Calculate from '../pages/Calculate';
import KeyTest from '../pages/KeyTest';
import BoilingVerdict from '../pages/Boling';
import HookTest from '../pages/HookTest';

const BasicRoute = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Calculate} />
                <Route exact path="/keyTest" component={KeyTest} />
                <Route exact path="/boilingVerdict" component={BoilingVerdict} />
                <Route exact path="/hookTest" component={HookTest} />
            </Switch>
        </HashRouter>
    )
}

export default BasicRoute;