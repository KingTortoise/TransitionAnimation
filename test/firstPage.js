/**
 * Created by jinwenwu on 2018/10/16.
 */
import React, {Component} from 'react'
import { Text, View, TouchableOpacity,Alert,Animated,Easing} from 'react-native'
import SecondPage from './secondPage'

export default class FirstPage extends  Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        title: 'FirstPage', // 固定标题
        headerRight: <TouchableOpacity style={{marginRight:20}}
                                       disabled={navigation.state.params ? navigation.state.params.disable : false}
                                       onPress={() => {
                                           const {params = {}} = navigation.state
                                           params.showAlert()
        }}><Text style={{fontSize: 14,color: '#333'}}>新增</Text></TouchableOpacity>
    })

    constructor (props) {
        super(props)
        this.state = {
            titleFontSize:new Animated.Value(14),
            titleMarginTop:new Animated.Value(50),
            titleMarginLeft:new Animated.Value(50),
            colorValue : new Animated.Value(0)
        }
        this.staggerAnimated = Animated.stagger(2000, [
            Animated.stagger(800, [
                Animated.timing(
                    this.state.titleFontSize,
                    {
                        toValue: 25,
                        duration: 1200,
                        easing: Easing.in,
                    }
                ),
                Animated.parallel([
                    Animated.timing(
                        this.state.titleMarginTop,
                        {
                            toValue: 350,
                            duration: 2000,
                            easing: Easing.in,
                        }
                    ),
                    Animated.timing(
                        this.state.titleMarginLeft,
                        {
                            toValue: 200,
                            duration: 2000,
                            easing: Easing.in,
                        }
                    ),
                ])
            ]),
            Animated.parallel([
                Animated.timing(
                    this.state.colorValue,
                    {
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.in,
                    }
                )
            ]),
        ])
    }

    componentDidMount () {
        this.props.navigation.setParams({showAlert: this.showAlert.bind(this),disable: false})
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity activeOpacity={1} onPress={() => {
                    this.goSecondPage()}}>
                    <Animated.Text style={{backgroundColor: this.state.colorValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['rgba(27,36,168,0)','rgba(250,189,23,1)']
                    }),fontSize:this.state.titleFontSize,marginTop:this.state.titleMarginTop,
                        marginLeft:this.state.titleMarginLeft}}>溜了溜了</Animated.Text>
                </TouchableOpacity>
            </View>
        )
    }

    goSecondPage() {
        this.props.navigation.setParams({disable: true})
        this.staggerAnimated.start(()=>{
            this.props.navigation.navigate('SecondPage')
            this.props.navigation.setParams({disable: false})
            this.staggerAnimated.reset()
        })
    }

    showAlert(){
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
}