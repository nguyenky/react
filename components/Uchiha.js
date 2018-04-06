import React,{Component} from "react";
import PropTypes from 'prop-types';
const util = require('util');
import{
  View,
  Text,
  TouchableOpacity,
  Button
} from "react-native";
import {
  StackNavigator,
} from 'react-navigation';

export default class Uchiha extends Component{
  static navigationOptions = {
    // header: { visible:false },
    title: 'Welcome uchia',

  };
  render(){
    var {navigate} = this.props.navigation;
    const { params } = this.props.navigation.state;
    return(
      <View style={{backgroundColor:'green',flex:1}}>
        <Text>{params.name}</Text>
        <Text>{this.props.navigation.state.params.name}</Text>
        <Text>Uchiha screen here !!!</Text>
        <Button
          onPress={()=>navigate("Clock",{})}
          title = "Go to the clock screen !!!"
        />
      </View>
    );
  }
  clickMe(){

  }
}
