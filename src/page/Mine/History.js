import React from 'react';
import {
  View ,
  Text,
}from 'react-native';
import WebView from '../../Components/WebView';

export default class extends React.PureComponent{
  static navigationOptions = {
    title:'历史记录',
  }
  render(){
    const {uri } = this.props;
    return(
      <View style={{flex:1}}>
        <WebView uri={'https://www.jianshu.com/p/2db4e3e2c343'}
        />
      </View>
    )
  }
}