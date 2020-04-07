/**
 * 首页
 * 2020/04/04
 * @author Ethan Zhang email : 610558983@qq.com
 */


import React , { PropTypes }from 'react'
import { connect } from 'react-redux'
import {
    SafeAreaView,
    StyleSheet,
    StatusBar
} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Loading from '../../components/loading'
import NavHeader from '../../components/navHeader'
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
    render() {
        return (
            <SafeAreaView style={[styles.page,{backgroundColor:this.props.themeColor.page_bg}]}>
                <StatusBar barStyle={'light-content'}/>
                <NavHeader
                    isShowLeftIcon={true}
                    leftIconOnPress={this.ListenToPost}
                    leftIcon={<FontAwesomeIcon name={'headphones'} color={this.props.themeColor.tabbar_text_inactive_tint_color} size={24}/>}
                    title={'Neutron'}
                    titleStyle={{fontSize:24,color:this.props.themeColor.text_header_title_color,fontWeight:'500'}}
                    isShowRightIcon={true}
                    rightIconOnPress={this.searchPost}
                    rightIcon={<AntDesignIcon name={'search1'} color={this.props.themeColor.tabbar_text_inactive_tint_color} size={24}/>}
                />
                {/* <View style={{flex:1,backgroundColor:'#fff'}}> */}
                    <Loading 
                        lineWidth={2}
                        size={50}
                        lineColor={this.props.themeColor.tabbar_text_inactive_tint_color}
                    />
                {/* </View> */}
                
            </SafeAreaView>
        )
    }
    /**
     * @method 听书
     */
    ListenToPost = () => {

    }
    /**
     * @method 搜索文章
     */
    searchPost = () => {

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