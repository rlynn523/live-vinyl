import actions from '../actions/artist';
import initialState from './initialstate';

export default function ArtistReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_ARTIST_ALBUMS:
        let vinyl = action.vinyl.results;
        let Artist = Object.assign({}, state, {
            vinyl: vinyl
        });
        return Artist;
    }
    return state;
}
