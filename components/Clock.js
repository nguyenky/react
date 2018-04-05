import React,{Component} from "react";
import{
  View,
  Text,
  TouchableOpacity,
  Button
} from "react-native";
const util = require('util');
export default class Clock extends Component {
  static navigationOptions = {
    title: 'Welcome clock',
  };
  render(){
    var {navigate} = this.props.navigation;
    return(
      <View>
        <Text>uchiha clock here</Text>
        <Button
          onPress={()=>navigate("Uchiha")}
          title = "Go to the Uchiha screen !!!"
        />
      </View>
    );
  }
}
