import React from "react";
import { Share } from "react-native";
import { ListItem, Left, Right, Body,View, Text } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Avatar from "../../Components/Avatar";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import {autoHeight,autoWidth,autoFont} from '../../util/flex';

export default class Mine extends React.Component {
  static navigationOptions = {
    headerTitle: "我的",
    headerBackTitle: null,
    headerTitleStyle: { textAlign: "center", flex: 1 },
    headerStyle: { elevation: 0 } //elevation 可去除header 的阴影线
  };
  _basket = () => {
    this.props.navigation.navigate("Basket");
  };

  _history = () => {
    this.props.navigation.navigate("History");
  };

  async onShare() {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });
      console.log(result, 333);
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
      <View style={{ flex: 1 }}>
        <View style={style.avatar}>
          <Avatar size={100} round={true} />
          <Text style={style.login}>登陆 / 注册账号</Text>
          <View style={style.descibe}>
            <Text style={{ fontSize: autoFont(10), textAlign: "center" }}>
              解锁收藏、云端同步功能、收藏内容不丢失
            </Text>
          </View>
        </View>
        <View>
          <ListItem icon onPress={this._basket} >
            <Left>
              <FontAwesome name="shopping-basket" size={autoFont(16)} color={"grey"} />
            </Left>
            <Body style={{ borderBottomColor: "red", borderBottomWidth: 0 }}>
              <Text>菜篮子</Text>
            </Body>
            <Right style={{ borderBottomColor: "red", borderBottomWidth: 0 }}>
              <FontAwesome name="angle-right" size={autoFont(16)} color={"grey"} />
            </Right>
          </ListItem>
          <ListItem icon onPress={this._history}>
            <Left>
              <FontAwesome name="history" size={autoFont(16)} color={"grey"} />
            </Left>
            <Body style={{ borderBottomColor: "red", borderBottomWidth: 0 }}>
              <Text>历史记录</Text>
            </Body>
            <Right style={{ borderBottomColor: "red", borderBottomWidth: 0 }}>
              <FontAwesome name="angle-right" size={autoFont(16)} color={"grey"} />
            </Right>
          </ListItem>
          <ListItem icon onPress={this.onShare}>
            <Left>
              <AntDesign name="like2" size={autoFont(16)} color={"grey"} />
            </Left>
            <Body style={{ borderBottomColor: "red", borderBottomWidth: 0 }}>
              <Text>用着不错，鼓励一下呗！</Text>
            </Body>
            <Right style={{ borderBottomColor: "red", borderBottomWidth: 0 }}>
              <FontAwesome name="angle-right" size={autoFont(16)} color={"grey"} />
            </Right>
          </ListItem>
        </View>
      </View>
    );
  }
}

const style = {
  avatar: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10
  },
  login: {
    fontSize:autoFont(17),
    fontWeight:'normal',
    marginBottom:5,
  },
  descibe: {
    width:'50%',
  }
};
