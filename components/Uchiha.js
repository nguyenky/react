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
    title: 'Welcome uchia',
  };
  render(){
    var {navigate} = this.props.navigation;
    return(
      <View>
        <Text>Uchiha screen here !!!</Text>
        <Button
          onPress={()=>navigate("Clock")}
          title = "Go to the clock screen !!!"
        />
      </View>
    );
  }
  clickMe(){

  }
}
