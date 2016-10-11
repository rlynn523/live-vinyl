import actions from '../actions/saved';
import initialState from './initialstate';

export default function SavedDataReducer (state = initialState, action) {
    switch(action.type) {
        case actions.GET_SAVED_VINYL:
        let savedVinyl = action;
        let savedUserVinyl = Object.assign({}, state, {
            savedVinyl: savedVinyl
        });
        return savedUserVinyl;
        break;
        case actions.GET_SAVED_TOURS:
        let savedTours = action;
        let savedUserTours = Object.assign({}, state, {
            savedTours: savedTours
        });
        return savedUserTours;
        default:
            return state;
    }
}
