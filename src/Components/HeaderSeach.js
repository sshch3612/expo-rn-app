import React from 'react';
import {View,StyleSheet, Text} from 'react-native';
import { Input } from 'react-native-elements';


export default function(){
  return(
    <View style={style.container}>
      <Text style={style.search}>搜索菜单/食材</Text>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:44,
    backgroundColor:'#eacd77'
  },
  search:{
    fontSize:13,
    color:'#786e6e',
    textAlign:'center',
    backgroundColor:'#fde397',
    width:'85%',
    height:34,
    lineHeight:34,
  }
})
