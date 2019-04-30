import React from 'react';
import {View } from 'react-native';

export default function (props){
  return(
    <View style={{flex:1,paddingLeft:10,paddingRight:10}}>
      {React.Children.map(props.children,function(child,index){
          return child;
      })}
    </View>
  )
}