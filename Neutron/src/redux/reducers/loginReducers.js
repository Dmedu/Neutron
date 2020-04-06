import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actionType/loginType'
const defaultState = {
    isLoginIn:false
}
export default loginStatus = (state = defaultState, action) => {
    console.log(state);
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { isLoginIn: true };
        case LOGIN_FAILURE:
            return { isLoginIn: false };
        default:
            return state;
    }
}