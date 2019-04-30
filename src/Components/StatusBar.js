import React from 'react';
import {View, StatusBar, Platform, NativeModules} from 'react-native';
const { StatusBarManager } = NativeModules; 
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT; 

export default function(props){
    const {backgroundColor} = props;  
    return(
      <React.Fragment>
        <StatusBar
        animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
        hidden={false}  //是否隐藏状态栏。
        backgroundColor={backgroundColor} //状态栏的背景色
        translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        // barStyle={'light-content'}
        />
        <View style={{height:STATUSBAR_HEIGHT,backgroundColor:backgroundColor}}></View>
      </React.Fragment>
    )  
}