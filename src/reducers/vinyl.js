import actions from '../actions/vinyl';
import initialState from './initialstate';

export default function VinylReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_ARTIST_VINYL:
        let vinyl = action.vinyl.results;
        let Artist = Object.assign({}, state, {
            vinyl: vinyl
        });
        return Artist;
    default:
        return state;
    }
}
