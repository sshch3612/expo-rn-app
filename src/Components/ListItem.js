import React from 'react';
import {View, Text ,TouchableOpacity, Alert} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'


export default function (props){
  _view = () => {
    Alert.alert('你点击了我')
  }

  _renderLeftIcon = () => {
    const {renderLeftIcon, isShowLeftIcon} = props;
    if(renderLeftIcon){
      return renderLeftIcon;
    }
    if(isShowLeftIcon){
      return <View style={{width:4,minHeight:44,backgroundColor:'#eacd77'}}></View>
    }
    return null;
  }
  _renderRightIcon = () => {
      return(
        <TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center'}} onPress={this._view}>
          <Text style={{marginRight:-10}}>{props.view}</Text>
          <EvilIcons  name='chevron-right' size={34} color={'red'}/> 
        </TouchableOpacity>
      )
  }
  return(
    <TouchableOpacity style={style.listitem} onPress={props.onPress}>
      <View style={style.container}>
          {this._renderLeftIcon()}
        <View style={style.itemTitle}>
          <Text>{props.title}</Text>
        </View>
        <View style={style.itemView}>
        {this._renderRightIcon()}
        </View>
      </View>
  </TouchableOpacity> 
  )
}
const style = {
  listitem:{
    minHeight:44,
    paddingLeft:15,
    paddingRight:15,
    marginBottom:5,
    backgroundColor:'#eaee49',
    display:'flex',
  },
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems:'center'
  },
  itemTitle: {
    flex: 1,
    paddingLeft:5,
  },
  itemView: {
    // flex: 1,
  }
}