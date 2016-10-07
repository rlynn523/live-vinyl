import redux from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware = [
    ReduxThunk,
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);


let store = createStore(reducers, {}, enhancers);

module.exports = store;
