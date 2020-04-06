import {combineReducers} from 'redux';
import LoginReducers from './loginReducers'
import ThemeSetReducers from './themeSetReducers'

const rootReducer = combineReducers({
    LoginReducers,
    ThemeSetReducers
});

export default rootReducer;