import actions from '../actions/createUser';
import initialState from './initialstate';

export default function CreateUserReducer (state = initialState, action) {
    switch(action.type) {
        case actions.CREATE_NEW_USER:
        let username = action;
        let NewUser = Object.assign({}, state, {
            username: username
        });
        return NewUser;
        default:
            return state;
    }
}
