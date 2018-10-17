/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
    StatusBar,
} from 'react-native';
import Router from './StackNavigator/index'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle='light-content'/>
        <Router/>
      </View>
    );
  }
}
