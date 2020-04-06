/**
 * @module 路由
 * 2020/04/04
 * @author Ethan Zhang email : 610558983@qq.com
 */
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Home from '../../page/home'
import ReadingList from '../../page/readingList'
import Create from '../../page/create'
import Activity from '../../page/activity'
import You from '../../page/you'
const BottomTabRouter = [
    {
        name: 'Home',
        component: Home,
        options: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={color} size={size} />
            )
        }
    },
    {
        name: 'ReadingList',
        component: ReadingList,
        options: {
            tabBarLabel: 'ReadingList',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="list" color={color} size={size} />
            )
        }
    },
    {
        name: 'Create',
        component: Create,
        options: {
            tabBarLabel: 'Create',
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="playlist-add" color={color} size={size} />
            )
        }
    },
    {
        name: 'Activity',
        component: Activity,
        options: {
            tabBarLabel: 'Activity',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-notifications-outline" color={color} size={size} />
            )
        }
    },
    {
        name: 'You',
        component: You,
        options: {
            tabBarLabel: 'You',
            tabBarIcon: ({ color, size }) => (
                <SimpleLineIcons name="user" color={color} size={size} />
            )
        }
    }
]
export default BottomTabRouter;