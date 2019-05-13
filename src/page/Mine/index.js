import React from "react";
import { 
  View,
  Text 
} from "react-native";
import Mine from './Mine';
import Basket from './Basket';
import HistoryScreen from './History';
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
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
  // headerMode: 'none',
  transitionConfig:()=>({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
})
});

export default AppNavigator;
// createAppContainer(AppNavigator);