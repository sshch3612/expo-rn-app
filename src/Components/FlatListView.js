import React from 'react';
import {View ,Text, Image, FlatList, RefreshControl} from 'react-native';
import { Card, CardItem} from 'native-base';

import  axios from 'axios';

const host = 'http://192.168.123.129:7001'
/**
 *data：源数据，默认为Array<{key: string}>类型。

renderItem：对应一个数据Item的显示。

ListHeaderComponent：列表头部。

ListFooterComponent：列表尾部。

ListEmptyComponent：当列表为空的时候，显示的component.

horizontal：是否水平方向展示。

onEndReached：已经滚动到底部的callback.

onRefresh：下拉刷新的callback.

refreshing：标记是否正在刷新。

initialNumToRender：如果有“回到顶部”的需求，建议设置该属性，建议为刚好满屏时候的列数。

 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class  extends React.Component{

  // static defaultProps = {

  // }

  state = {
    dataSource:[1,2,4,5,6,7,8,9,23,3,4],
    refreshing: false,
  }


  _refresh = (e) => {
    const _this = this;
    _this.setState({refreshing: true});
    setTimeout(()=>{
      this._redata();
      _this.setState({
        refreshing: false
      })
    },2000)

  }
  componentDidMount(){
    const data = [];
    this._redata();
  }
  _redata = () => {
    const data = [];
    for(let i =0; i< Math.round(Math.random()*10); i++){
      data.push(i)
    }
    this.setState({
      dataSource: data
    })
  }

  _keyExtractor=(item,index)=>`ceshi${index}`;
  _onEndReached = () => {
      const data = [...this.state.dataSource];
      for(let i =0; i< 5; i++){
        data.push(i)
      }
      this.setState({
        dataSource: data
      })
  }
  _renderItems = ({item,index}) => {
    return(
      // <View style={{height:140,}}></View>
      <Card >
      <CardItem>
        <Image
          style={{ height: 120, width: "100%" }}
          source={{
            uri:
              "http://img1.hoto.cn/haodou/g/4/20190307/8ae32ae8cca.jpg?v=155195442692"
          }}
        />
      </CardItem>
    </Card>
    )
  }
  render(){
    const {dataSource , refreshing} = this.state;
    const {...restProps} = this.props;
    return(
      <FlatList
        ref={(self)=>{this.myRef = self}}
        data={dataSource}//数据源
        showsVerticalScrollIndicator={false}
        renderItem={this._renderItems}//渲染子项
        ListEmptyComponent={<Text>暂无数据</Text>}//当列表为空的时候，显示的component.
        horizontal={false}//是否水平方向展示
        refreshing={refreshing}
        onRefresh={this._refresh}
        // onEndReachedThreshold={10}
        // onEndReached={this._onEndReached}
        keyExtractor={this._keyExtractor}//item 生成唯一的key
        // refreshControl={
        //   <RefreshControl tintColor="#ff0000"
        //                   refreshing={this.state.refreshing}
        //                   onRefresh={this._refresh}
        //                   title={this.state.refrenTitle}
        //                   colors={['#ff0000','#00ff00','#0000ff']}
        //                   progressBackgroundColor="#00ff00"
        //                   />
        // }
      {...restProps}
      />
    )  
  }
}