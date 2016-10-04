import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Search from './components/search';
import Vinyl from './components/vinyl';
import Music from './components/music';


const SearchContainer = function() {
    return (
        <div>
            <Search />
            <Music />
            <Vinyl />
        </div>
    )
}

let mainRouter = (
    <Router history={hashHistory}>
        <Route path='/' component={SearchContainer} />
    </Router>
);
module.exports = mainRouter;
