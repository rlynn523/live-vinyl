import { combineReducers } from 'redux';
import MusicReducer from './music';
import ArtistReducer from './artist';
import TourReducer from './tour';
import CreateUserReducer from './createUser';

export default combineReducers({
    MusicReducer,
    ArtistReducer,
    TourReducer,
    CreateUserReducer
});
