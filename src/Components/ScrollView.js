import React from 'react';
import {View ,Text, ScrollView, RefreshControl} from 'react-native';

export default class  Home extends React.Component{
  state = {
    refreshing: false,
    title: '下拉可以刷新'
  }
  _refresh = ( )=>{
      this.setState({
        refreshing: true,
      })
      const _this = this;
      setTimeout(function(){
        _this.setState({
          refreshing: false,
        })
      },2000)
  }
  _onscroll = (e) => {
     console.log(e, 33333);
  }
  render(){
    return(
        <ScrollView
            onScroll={this._onscroll}
            showsVerticalScrollIndicator={false}
            refreshControl={
                    <RefreshControl //tintColor="#ff0000"
                          refreshing={this.state.refreshing}
                          onRefresh={this._refresh}
                          title={this.state.title}
                          onResponderEnd
                          //colors={['#ff0000','#00ff00','#0000ff']}
                          //progressBackgroundColor="red"
                          />
                  }>
                  {React.Children.map(this.props.children,function(item, idnex) {
                      return item;
                  })}
        </ScrollView>
    )  
  }
}