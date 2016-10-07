import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Landing from './components/landing';
import CreateUser from './components/signup';
import Search from './components/search';
import Vinyl from './components/vinyl';
import Music from './components/music';
import Tour from './components/tour';
import SignIn from './components/signin';

const SearchContainer = function() {
    return (
        <div>
            <Search />
            <Tour />
            <Music />
            <Vinyl />
        </div>
    )
}

let mainRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/create-user' component={CreateUser} />
        <Route path='/search' component={SearchContainer} />
    </Router>
);

module.exports = mainRouter;
