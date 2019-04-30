import React from 'react';
import {View, TextInput, Text ,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';


/**
 *功能点
 *头部搜索框：可以模拟一个placeholder
 placeholder居中
 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  state = {
    search: '',
    value: '',
    placeholdeShow: true,
  };

  updateSearch = search => {
    this.setState({ search });
  };

  /**
   *点击搜索获取焦点
   */
  _focus = (e) => {
    e.preventDefault();
    this.setState({
      placeholdeShow: false
    });
    this.mytextinput.focus();
  }
  /**
   *失去焦点
  */
  _blur = (e) => {
      e.preventDefault();
      this.setState({
        placeholdeShow: true,
        value: '',
      });
      this.mytextinput.blur();
    }
  /**
   *清空输入框的内容
  */
  _clear = (e) => {
      e.preventDefault();
      // this.mytextinput.clear();
      this.setState({
        value:'',
      })
    }
  _renderPlaceholder = () => {
      return(<TouchableOpacity 
                style={{position:'absolute',left:0,right:0,top:0,bottom:0,display:'flex'}}
                onPress={this._focus}>
              <View 
                style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <EvilIcon name='search' size={22}/>
                <Text>搜索</Text>
              </View>
            </TouchableOpacity> )
  }
  /**
   *渲染取消按钮
   */
  _renderCancelbtn = () => {
    const { placeholdeShow ,value} = this.state;
    if( !placeholdeShow && value.length){
      return(
        <Icon onPress={this._clear} name='cancel' size={15}/>
      )
    }
    return null;
  }

  _onChangeText = (val ) => {
    this.setState({
      value: val,
    })
  }
  render() {
    const { search, placeholdeShow ,value} = this.state;

    return (
      <View style={style.search}>
        <View style={style.textinput}>
          {!placeholdeShow && <EvilIcon  name='search' size={22}/> }
          <TextInput style={{flex:1}}
            onBlur={this._blur}
            returnKeyType='search'
            ref={(ref) =>{ this.mytextinput = ref}}
            onChangeText={this._onChangeText}
            value={value}
          />
          {placeholdeShow && this._renderPlaceholder()}
          {this._renderCancelbtn()}
        </View>
        {!placeholdeShow &&  <Text onPress={this._blur}
          style={style.textcancel}>取消</Text>}
      </View>
    );
  }
}

const style = {
  search: {
    minHeight: 44,
    backgroundColor:'#F5F5F0',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  textinput: {
    flex:1,
    height:24,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
  },
  textcancel: {
    width:44,
    textAlign:'right'
  }
}