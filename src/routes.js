import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Landing from './components/landing';
import CreateUser from './components/signup';
import Search from './components/search';
import Vinyl from './components/vinyl';
import Music from './components/music';
import Tour from './components/tour';
import SignIn from './components/signin';
import Related from './components/related';
import SavedVinyl from './components/savedVinyl';
import SavedTours from './components/savedTours';

const SearchContainer = function() {
    return (
        <div>
            <Search />
            <Tour />
            <Music />
            <Vinyl />
            <Related />
        </div>
    )
}

const SavedContainer = function() {
    return (
        <div>
            <SavedVinyl />
            <SavedTours />
        </div>
    )
}

let mainRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={Landing} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/create-user' component={CreateUser} />
        <Route path='/search' component={SearchContainer} />
        <Route path='/saved' component={SavedContainer} />
    </Router>
);

module.exports = mainRouter;
