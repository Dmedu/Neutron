/**
 * 主题设置
 * @class ThemeSet
 * @constructor
 * @param { String } name 主题名称 Light ｜ Dark | Custom
 * @param { String } type 主题类型 APP_THEME | CUSTOM_THEME
 * @author Ethan Zhang email : 610558983@qq.com
 * 2020/04/04
 */
import React from 'react'
import { setTheme } from '../redux/action/themeSetAction'
import Store from '../redux/store'
import DarkColor from './darkColor'
import LightColor from './lightColor'
import CustomColor from './customColor'
class ThemeSet {
    constructor(param) {
        console.log(param);
        this.params = param;
    }
    /**
     * @method 主题设置
     */
    setThemeColor = () => {
        console.log(Store);
        let colorObj;
        switch (this.params.name) {
            case 'Dark':
                colorObj = DarkColor;
                break;
            case 'Light':
                colorObj = LightColor;
                break;
            case 'Custom':
                colorObj = CustomColor;
                break;
            default:
                colorObj = LightColor
        }
        Store.dispatch(setTheme(this.params.name, this.params.type, colorObj));
    }
}

export default ThemeSet;