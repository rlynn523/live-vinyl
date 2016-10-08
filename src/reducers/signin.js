import actions from '../actions/createUser';
import initialState from './initialstate';

export default function SignInReducer (state = initialState, action) {
    switch(action.type) {
        case actions.USER_SIGN_IN:
        console.log(action);
        let username = action;
        let ReturnUser = Object.assign({}, state, {
            username: username,
        });
        return ReturnUser;
        default:
            return state;
    }
}
