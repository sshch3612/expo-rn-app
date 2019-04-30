import React from 'react';
import {
  View ,
  Text
}from 'react-native';
import StatusBar from '../../Components/StatusBar'

export default class extends React.PureComponent{
  static navigationOptions = {
    title:'菜篮子',
  }
  render(){
    return(
      <View style={{flex:1}}>
        <View>
          <Text>
            菜篮子
          </Text>
        </View>
      </View>
    )
  }
}