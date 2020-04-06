import {
    THEME_SET
} from '../actionType/themeSetType'
/**
 * @method 设置主题
 * @param { String } name 主题名称
 * @param { String } type 主题类型
 * @param { Object } colors 主题style对象
 */
const setTheme = (name,type,colors) => {
    return {
        type:THEME_SET,
        themeName:name,
        themeType:type,
        colors:colors
    }
}

export {
    setTheme
};