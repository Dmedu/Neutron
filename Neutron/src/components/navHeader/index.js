/**
 * 头部导航组件
 */

import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types';
class NavHeader extends React.Component {
    static defaultProps = {
        isShowLeftIcon:false,
        title:'headerName',
        titleStyle:{fontSize:16,color:'#333',fontWeight:'500'},
        isShowRightIcon:false
    }
    render() {
        return (
            <View style={[styles.header, { backgroundColor: this.props.bgColor }]}>
                { this.props.isShowLeftIcon ? this.leftIconView() : <View></View> }
                <TouchableOpacity
                    onPress={() => this.props.titleOnPress}
                    activeOpacity={1}
                >
                    <Text style={this.props.titleStyle}>{this.props.title}</Text>
                </TouchableOpacity>
                { this.props.isShowRightIcon ? this.rightIconView() : <View></View> }
            </View>
        )
    }
    // 左侧icon视图
    leftIconView = () => {
        console.log(this.props.leftIcon);
        return (
            <TouchableOpacity
                onPress={() => this.props.leftIconOnPress}
            >
                <View style={styles.leftIcon}>
                    {this.props.leftIcon}
                </View>
            </TouchableOpacity>
        )
    }
    // 右侧icon视图
    rightIconView = () => {
        return (
            <TouchableOpacity
                onPress={() => this.props.rightIconOnPress}
            >
                <View style={styles.leftIcon}>
                    {this.props.rightIcon}
                </View>
            </TouchableOpacity>
        )
    }
}
NavHeader.PropTypes = {
    isShowLeftIcon:PropTypes.bool,
    leftIconOnPress:PropTypes.func,
    leftIcon:PropTypes.element,
    title:PropTypes.string,
    titleStyle:PropTypes.object,
    isShowRightIcon:PropTypes.bool,
    rightIconOnPress:PropTypes.func,
    rightIcon:PropTypes.element
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 46
    },
    leftIcon: {
        paddingLeft: 20,
        paddingRight: 20
    }
})
export default NavHeader;