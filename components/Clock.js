import React,{Component} from "react";
import{
  View,
  Text,
  TouchableOpacity
} from "react-native";
export default class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      somayman:999
    }
  }
  render(){
    return(
      <View>
        <Text>{this.state.somayman}</Text>
        <TouchableOpacity onPress={()=>{this.clickMe()}}>
          <View style={{backgroundColor:'red', width:100, height:20}}>
            <Text>Run</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  clickMe(){
    // alert(1);
    this.setState({
      somayman:this.state.somayman+1
    });
  }
}
