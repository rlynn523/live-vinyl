import actions from '../actions/artist';
import initialState from './initialstate';

export default function SavedVinylReducer (state = initialState, action) {
    switch(action.type) {
        case actions.GET_SAVED_VINYL:
        console.log('ACTION', action);
        let savedVinyl = action;
        let savedUserVinyl = Object.assign({}, state, {
            savedVinyl: savedVinyl
        });
        return savedUserVinyl;
        default:
            return state;
    }
}
