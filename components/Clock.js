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
    header: null,
    title: 'Welcome',

  };
  render(){
    var {navigate} = this.props.navigation;
    return(
      <View style={{backgroundColor:'red',flex:1}}>
        <Text>uchiha clock here</Text>
        <Button
          onPress={()=>navigate("Uchiha",{
            ho:'Le',
            name:'nguyen ky',
          })}
          title = "Go to the Uchiha screen !!!"
        />
      </View>
    );
  }
}
