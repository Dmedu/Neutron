/**
 * @module 堆栈导航
 * 2020/04/04
 * @author Ethan Zhang email : 610558983@qq.com
 */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../BottomTabNavigator' 
import StackRouter from './router'
const Stack = createStackNavigator();

export default () => {
    return <BottomTab/>
}