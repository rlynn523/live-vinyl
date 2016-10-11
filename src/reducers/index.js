import { combineReducers } from 'redux';
import MusicReducer from './music';
import VinylReducer from './vinyl';
import TourReducer from './tour';
import CreateUserReducer from './createUser';
import SavedDataReducer from './saved';

export default combineReducers({
    SavedDataReducer,
    MusicReducer,
    VinylReducer,
    TourReducer,
    CreateUserReducer
});
