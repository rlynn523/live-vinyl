import { combineReducers } from 'redux';
import ArtistReducer from './artist';
import VinylReducer from './vinyl';
import TourReducer from './tour';
import CreateUserReducer from './createUser';
import SavedDataReducer from './saved';

export default combineReducers({
    SavedDataReducer,
    ArtistReducer,
    VinylReducer,
    TourReducer,
    CreateUserReducer
});
