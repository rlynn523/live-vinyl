import { combineReducers } from 'redux';
import MusicReducer from './music';
import ArtistReducer from './artist';

export default combineReducers({
    MusicReducer,
    ArtistReducer
});
