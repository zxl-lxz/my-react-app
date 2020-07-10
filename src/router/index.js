import { HashRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Calculate from '../pages/Calculate';
import KeyTest from '../pages/KeyTest';
import BoilingVerdict from '../pages/Boling';

const BasicRoute = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Calculate} />
                <Route exact path="/keyTest" component={KeyTest} />
                <Route exact path="boilingVerdict" component={BoilingVerdict} />
            </Switch>
        </HashRouter>
    )
}

export default BasicRoute;