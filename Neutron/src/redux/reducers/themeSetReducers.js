import { THEME_SET } from '../actionType/themeSetType'
import LightColor from '../../theme/lightColor'
const defaultState = {
    themeName:'Light',
    themeType:'APP_THEME',
    colors:LightColor
}

export default themeStatus = (state = defaultState, action) => {
    switch (action.type) {
        case THEME_SET:
            return  {
                themeName:action.themeName,
                themeType:action.themeType,
                colors:action.colors
            };
        default:
            return state;
    }
}