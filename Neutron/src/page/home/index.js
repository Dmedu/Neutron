/**
 * 首页
 * 2020/04/04
 * @author Ethan Zhang email : 610558983@qq.com
 */


import React from 'react'
import { connect } from 'react-redux'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native'
import ThemeSet from '../../theme'

const mapHomeStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        isLoginIn: state.LoginReducers.isLoginIn,
        themeColor: state.ThemeSetReducers.colors
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        let Theme = new ThemeSet({
            name: 'Dark',
            type: 'APP_THEME'
        });
        Theme.setThemeColor();
    }
    componentWillMount() {
        console.log(this.props.themeColor);
    }
    render() {
        return (
            <SafeAreaView style={[styles.page,{backgroundColor:this.props.themeColor.page_bg}]}>
                <View></View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    text: {
        fontSize: 50,
        fontWeight: '600'
    }
})

export default connect(mapHomeStateToProps)(Home);