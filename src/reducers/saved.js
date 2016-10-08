import actions from '../actions/artist';
import initialState from './initialstate';

export default function SavedVinylReducer (state = initialState, action) {
    switch(action.type) {
        case actions.SAVE_ARTIST_VINYL:
        console.log(action);
        let music = action;
        let Music = Object.assign({}, state, {
            music: music
        });
        return Music;
        default:
            return state;
    }
}
