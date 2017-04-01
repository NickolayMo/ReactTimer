'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

$(document).foundation();
require('style!css!sass!appStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}></IndexRoute>
            <Route path="/countdown" component={Countdown}></Route>
            <Route path="/timer" component={Timer}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
