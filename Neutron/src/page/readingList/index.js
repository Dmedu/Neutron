/**
 * 阅读列表
 * 2020/04/04
 * @author Ethan Zhang email : 610558983@qq.com
 */


import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native'

class ReadingList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
           <SafeAreaView style={styles.page}>
               <Text style={styles.text}>阅读列表</Text>
           </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
   page:{
       backgroundColor:'cyan',
       flex:1
   },
   text:{
       fontSize:50,
       fontWeight:'600'
   }
})

export default ReadingList;