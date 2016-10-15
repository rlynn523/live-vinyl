import actions from '../actions/tour';
import initialState from './initialstate';

export default function TourReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_TOUR_DATES:
        let tour = action;
        let Tour = Object.assign({}, state, {
            tour: tour
        });
        return Tour;
        default:
            return state;
    }
}
