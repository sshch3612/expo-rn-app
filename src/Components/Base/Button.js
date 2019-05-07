import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Text
} from "react-native";
import {scaleSizeH,scaleSizeW} from '../../util/flex';

export default class Button extends Component {
  //默认属性
  static defaultProps = {
    containStyle:null,
    textStyle: null,
    onPress:()=>{},
    Icon: null,

  };
  //构造函数
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      //状态机变量声明
    };
  }


  //渲染
  render() {
    const {} = this.state;
    const { containStyle, onPress, children ,textStyle,Icon} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={.6}
        // onLongPress={this.props.onLongPress}
        // onPressOut={this.props.onPressOut}
        style={[styles.button, containStyle]}
      >
        <View>
          {Icon}
          <Text style={[styles.text,textStyle]}>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    height: 44,
    backgroundColor:'#063',
    alignItems: 'center',
    justifyContent:'center'
  },
  text: {
    textAlign: "center",
    fontSize:17,
    color:'#fff'
  }
});
