import React from "react";
import { 
  View,
  Text 
} from "react-native";
import Mine from './Mine';
import Basket from './Basket';
import HistoryScreen from './History';

import { createStackNavigator } from "react-navigation";



const AppNavigator = createStackNavigator({
  Mine: {
    screen: Mine
  },
  Basket: {
    screen: Basket
  },
  History: {
    screen: HistoryScreen
  }
},{
  initialRouteName: 'Mine',//设置堆栈的默认屏幕。必须匹配路径配置中的一个键。
});

export default AppNavigator;
// createAppContainer(AppNavigator);