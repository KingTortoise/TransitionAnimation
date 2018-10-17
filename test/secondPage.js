/**
 * Created by jinwenwu on 2018/10/16.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
export default class FirstPage extends  Component {
    static navigationOptions = {
        title: 'SecondPage', // 固定标题
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{backgroundColor:'#fabd17',fontSize:25,marginTop:350,
                    marginLeft:200}}>溜了溜了</Text>
            </View>
        )
    }
}