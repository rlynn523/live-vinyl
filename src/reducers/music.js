import actions from '../actions/artist';
import initialState from './initialstate';

export default function MusicReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_ARTIST_MUSIC:
        let music = action;
        let Music = Object.assign({}, state, {
            music: music
        });
        return Music;
    }
    return state;
}
