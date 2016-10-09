import { combineReducers } from 'redux';
import MusicReducer from './music';
import VinylReducer from './vinyl';
import TourReducer from './tour';
import CreateUserReducer from './createUser';
import SavedVinylReducer from './saved';

export default combineReducers({
    SavedVinylReducer,
    MusicReducer,
    VinylReducer,
    TourReducer,
    CreateUserReducer
});
