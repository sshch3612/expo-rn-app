import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

export default class extends React.PureComponent{
    state = {
      color: 'red'
    }
    _onpress = (e) => {
      e.preventDefault();
      this.setState({
        color: 'blue'
      })
    }
    render(){
      return(
        <React.Fragment>
            <TouchableOpacity onPress={this._onpress}>
              <AntDesignIcon name='home' size={24} color={this.state.color}/>
              <View>
                <Text>首页</Text>
              </View>
            </TouchableOpacity>
        </React.Fragment>
      )  
    }
}