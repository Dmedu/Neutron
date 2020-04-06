import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actionType/loginType';

const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS
    }
};
const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
};

export {
    loginSuccess,
    loginFailure
}