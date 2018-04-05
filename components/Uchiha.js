import React,{Component} from "react";
import PropTypes from 'prop-types';
import{
  View,
  Text,
  TouchableOpacity
} from "react-native";
export default class Uchiha extends Component{
  render(){
    return(
      <View>
        <Text>
          {this.props.hoten} - {this.props.namsinh}
        </Text>
        
      </View>
    );
  }
}
Uchiha.propTypes = {
  hoten: PropTypes.string,
  namsinh: PropTypes.string,
};
