import React, { Component } from 'react';
import {
    View,
    Animated,
    Easing,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            rotateVal: new Animated.Value(0),
        }
        this.animationLoading = Animated.timing(
            this.state.rotateVal,
            {
                toValue: 360,
                easing: Easing.ease,
                useNativeDriver:true
            }
        );;
    }
    static defaultProps = {
        lineWidth:2,
        size:50,
        lineColor:'#000'
    }
    componentDidMount() {
        Animated.loop(this.animationLoading).start();
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps);
        console.log(nextState);
        if(
            this.props.lineColor !== nextProps.lineColor ||
            this.props.lineWidth !== nextProps.lineWidth ||
            this.props.size !== nextProps.size
        )
        {
            return true;
        }else{
            return false;
        }
    }
    render() {
        return (
            <View style={styles.loading}>
                <Animated.View
                    style={[styles.rotate, {
                        transform: [{ // 动画属性
                            rotate: this.state.rotateVal.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg'],
                            })
                        }],
                        borderWidth:this.props.lineWidth,
                        width:this.props.size,
                        height:this.props.size,
                        borderRadius:this.props.size/2,
                        borderColor:this.props.lineColor
                    }]} />
            </View>
        )
    }
    componentWillUnmount(){
        Animated.loop(this.animationLoading).stop();
    }
}
Loading.PropTypes = {
    lineWidth:PropTypes.number,
    size:PropTypes.number,
    lineColor:PropTypes.string
}



const styles = StyleSheet.create({
    loading:{
        flex:1,
        backgroundColor:'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rotate: {
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent'
    }
})