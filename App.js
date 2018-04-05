/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Uchiha from "./components/Uchiha.js";
export default class App extends Component {
  render() {
    return (
      <View>
        <Text>ádsa</Text>
        <Uchiha hoten="Uchiha" namsinh="1993"></Uchiha>
        <DemoComponent1 hoten="Lengyeky"></DemoComponent1>
        <DemoComponent1 hoten="Uchiha"></DemoComponent1>
        <TouchableOpacity onPress={()=>{this.clickMe()}}>
          <View style={{backgroundColor:'green',width:100,height:20}}>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  clickMe(){
    alert('welcome');
  }
}

class DemoComponent1 extends Component {
  render(){
    return(
      <View>
        <Text>
          {this.props.hoten} || 'default name'
        </Text>
      </View>

    );
  }
}
