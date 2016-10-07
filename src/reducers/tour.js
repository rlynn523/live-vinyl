import actions from '../actions/artist';
import initialState from './initialstate';

export default function TourReducer (state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_TOUR_DATES:
        let tour = action;
        let Tour = Object.assign({}, state, {
            tour: tour
        });
        return Tour;
        break;
        case action.SAVE_TOUR_DATE:
        console.log(action);
        let savedTourDates = action;
        let userSavedTour = Object.assign({}, state, {
            savedTourDates: savedTourDates
        });
        return userSavedTour;
    }
    return state;
}
