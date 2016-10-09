import { combineReducers } from 'redux';
import MusicReducer from './music';
import ArtistReducer from './artist';
import TourReducer from './tour';
import CreateUserReducer from './createUser';
import SavedVinylReducer from './saved';

export default combineReducers({
    SavedVinylReducer,
    MusicReducer,
    ArtistReducer,
    TourReducer,
    CreateUserReducer
});
