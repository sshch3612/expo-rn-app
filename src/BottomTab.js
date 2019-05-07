import React from "react";
import { View, Text ,Button} from "react-native";
import HomeScreen from './Layout';
import HomePage from './page/Home/HomeStack';
import MinePage from './page/Mine/MineStack';

import { createStackNavigator, createAppContainer ,createBottomTabNavigator, BottomTabBar} from "react-navigation";
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
/**
 *navigationOptions  
 *stackNavigator中配置标题栏
 *bottomTabnavigator中配置Tab
 *
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {
  state = {
    color: 'red'
  }

  static router = HomePage.router;
  static navigationOptions = ( ) =>({
    title: '首页',//通用标题可以用作备用headerTitle和tabBarLabel。
    color: true,
    headerTitle: '首页',
    tabBarIcon: function({tintColor}){
      return  <AntDesignIcon name='home' size={24} color={tintColor}/>//appstore-o
    } 
  })
  render() {
    return (
      <HomePage navigation={this.props.navigation}/>
    );
  }
}

class Sort extends React.Component{
  static  navigationOptions = {
    title: '分类',
    tabBarIcon: function({tintColor}){
      return  <AntDesignIcon name='appstore-o' size={24} color={tintColor}/>//appstore-o
    } 
  }
  render(){
    return(
      <View>
        <Text>分类页面</Text>
      </View>
    )
  }
}

class Collection extends React.Component{
  static navigationOptions = {
    title: '收藏',
    tabBarIcon: function({tintColor}){
      return  <AntDesignIcon name='staro' size={24} color={tintColor}/>//appstore-o
    } 
  }
  render(){
    return(
      <View>
        <Text>收藏页面</Text>
      </View>
    )
  }
}

class Story extends React.Component{
  static navigationOptions = {
    title: '厨房故事',
    tabBarIcon: function({tintColor}){
      return  <MaterialIcons name='kitchen' size={24} color={tintColor}/>//appstore-o
    } 
  }
  render(){
    return(
      <View>
        <Text>厨房故事页面</Text>
      </View>
    )
  }
}

class Mine extends React.Component {

  static router = MinePage.router;
  static  navigationOptions = {
    title: '我的',
    headerTitle: '我的',
    tabBarIcon: function({tintColor}){
      return  <AntDesignIcon name='user' size={24} color={tintColor}/>//appstore-o
    } 
  }
  render() {
    return (<MinePage  navigation={this.props.navigation}/>
    );
  }
}

/**
 * createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
 */
const AppNavigator = createBottomTabNavigator({
  Home:Home,
  Sort: Sort,
  Collection: Collection,
  Story: Story,
  Mine: Mine
},
{
  initialRouteName: "Home",//默认加载
  backBehavior: 'initialRoute', //后退按钮导致选项卡切换，默认initialRoute，切换到首页,none:  不切换
  lazy: true,//默认是true，false表示渲染所有选项卡,true，仅在第一次激活时才呈现
  //tabBarComponent: 覆盖用作标签栏的组件
  tabBarOptions: {
    style: {//标签栏整体样式
      // borderTopWidth: 'none'
    },
    activeTintColor:'#f3ad64',//活动选项卡的标签和图标颜色
    // activeBackgroundColor:'#c4ecc4',//活动选项卡的背景颜色
    // inactiveBackgroundColor:'#c4ecc4',//非活动选项卡的背景颜色
    // inactiveTintColor:'#c4ecc4',
    showLabel:true,//是否为标签显示标签，默认为true
    showIcon: true, //是否显示选项卡的图标，默认为true
    labelStyle: {//选项卡标签的样式对象
      fontSize: 12,
    },
    tabStyle: {//选项卡的样式对象
      marginBottom:3,
      textAlignVertical: 'center'
    } ,
  }
});

export const BottomTab =  createAppContainer(AppNavigator);