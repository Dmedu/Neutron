/**
 * @module 标签导航
 * 2020/04/04
 * @author Ethan Zhang email : 610558983@qq.com
 */

import React ,{ useState }from 'react';
import { connect } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigatorRouter from './router'

const mapBottomTabStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        themeColor: state.ThemeSetReducers.colors
    }
}

const Tab = createBottomTabNavigator();

class BottomTab extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: this.props.themeColor.tabbar_text_active_tintcolor,
                    activeBackgroundColor:this.props.themeColor.tabbar_bg_color,
                    inactiveTintColor:this.props.themeColor.tabbar_text_inactive_tint_color,
                    inactiveBackgroundColor:this.props.themeColor.tabbar_bg_color,
                    showLabel:false,
                    style:{
                        backgroundColor:this.props.themeColor.page_bg,
                        borderTopWidth:0
                    }
                }}
            >
                {BottomTabNavigatorRouter.map((item, index,arr) => {
                    return <Tab.Screen
                                key={index}
                                name={item.name} 
                                component={item.component}
                                options={item.options}
                            />
                })}
            </Tab.Navigator>
        );
    }
}

export default connect(mapBottomTabStateToProps)(BottomTab);