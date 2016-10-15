import actions from '../actions/artist';
import initialState from './initialstate';

export default function ArtistReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_ARTIST_MUSIC:
        let music = action;
        let Music = Object.assign({}, state, {
            music: music
        });
        return Music;
        break;
        case actions.FETCH_RELATED_ARTISTS:
            let related = action.related;
            let Related = Object.assign({}, state, {
                related: related
            });
            return Related;
        default:
            return state;
    }
}
