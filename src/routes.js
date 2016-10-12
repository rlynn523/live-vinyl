import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { MuiThemeProvider, AppBar, RaisedButton, IconButton } from 'material-ui';
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
import NavBar from './components/navbar';

let App = function(props) {
    return (
        <div>
            <MuiThemeProvider>
                <NavBar />
            </MuiThemeProvider>
            <div>
                {props.children}
            </div>
        </div>
    );
};

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
        <Route path='/' component={App}>
            <IndexRoute component={Landing} />
        </Route>
        <Route path='/sign-in' component={App}>
            <IndexRoute component={SignIn} />
        </Route>
        <Route path='/create-user' component={App}>
            <IndexRoute component={CreateUser} />
        </Route>
        <Route path='/search' component={App}>
            <IndexRoute component={SearchContainer} />
        </Route>
        <Route path='/saved' component={App}>
            <IndexRoute component={SavedContainer} />
        </Route>
    </Router>
);

module.exports = mainRouter;
