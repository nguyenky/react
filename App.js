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
  Image,
  TextInput
} from 'react-native';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      text:"hello",
      text2:"hello2",
      data:'le nguyen ky',
    }
    this.getApis();
  }
  render() {
    return (
      <View>
           <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
           <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text2) => this.setState({text2})}
              value={this.state.text2}
            />
            <Text>{this.state.text}</Text>
            <Text>{this.state.data}</Text>
      </View>
    );
  }
  getApis(){
    fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);// your JSON response is here
      console.log('----------------------');// your JSON response is here
      this.state.data = responseJson;
      console.log(this.state.data);// your JSON response is here
        // alert(responseJson);

        // alert(this.state.data);
    })
    .catch((error) => {
        console.log(error);
        alert('er');
    });
  }
}
