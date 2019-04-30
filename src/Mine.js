import React from "react";
import { 
  View,
  Text,
  Share
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Avatar from './Components/Avatar';
import ListItem from './Components/ListItem';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import AntDesign from 'react-native-vector-icons/AntDesign'

class Mine extends React.Component {
  static navigationOptions  = {
    headerTitle:'我的',
    headerStyle: {borderBottomWidth: 0}//控制标题组件样式
  }
  _basket = () => {
    this.props.navigation.navigate()
  }

  async onShare(){
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      })
      console.log(result,333);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <View style={{ flex: 1}}>
          <View style={style.avatar}>
            <Avatar  size={100} round={true}/>
            <Text style={style.login}>登陆 / 注册账号</Text>
            <View style={style.descibe}> 
              <Text style={{width:250,fontSize:17,textAlign:'center'}}>
                解锁收藏、云端同步功能、收藏内容不丢失
              </Text>
            </View>
          </View>
          <View>
            <ListItem onPress={this._basket}
               renderLeftIcon = {<FontAwesome style={{marginRight:5}} name='shopping-basket' size={22} color={'grey'}/>}
               title='菜篮子' />
               <ListItem 
               renderLeftIcon = {<FontAwesome style={{marginRight:5}} name='history' size={22} color={'grey'}/>}
               title='历史记录' />
               <ListItem  onPress={this.onShare}
               renderLeftIcon = {<AntDesign style={{marginRight:5}} name='like2' size={22} color={'grey'}/>}
               title='用着不错,鼓励一下吧' />
          </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Mine:Mine
});
const style = {
  avatar: {
    display:'flex',
    alignItems:'center',
  },
  login: {
    fontSize:22,
  },
  descibe: {
  }
}

export default createAppContainer(AppNavigator);