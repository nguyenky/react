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

import {
  StackNavigator,
} from 'react-navigation';


import Uchiha from "./components/Uchiha.js";
import Clock from "./components/Clock.js";
// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Clock></Clock>
//       </View>
//     );
//   }
//   clickMe(){
//     alert('welcome');
//   }
// }
const Navigation = StackNavigator({
  Uchiha:{screen:Uchiha},
  Clock:{screen:Clock},
});
export default Navigation;
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
