import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from '../StackNavigator'
import SignInScreen from '../../page/SignIn'
import SignUpScreen from '../../page/SignUp'

const Stack = createStackNavigator();

class Authentication extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            true? ( <StackNavigator /> ) : (
                <Stack.Navigator>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
            )
        )
    }
}
export default Authentication;