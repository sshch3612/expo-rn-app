import React from 'react';
import {View ,Text, FlatList, RefreshControl} from 'react-native';
import LineSlide from './LineSlide';
import ListItem from './ListItem'
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
  state = {
    dataSource:[{id:'test_01',},{id:'test_01'},{id: 'test_02'}],
    refreshing: false,
    refrenTitle: '下拉可以刷新1',
  }

  _onScroll = (e) => {
    console.log(e,33, e.nativeEvent);
  }

  _refresh = (e) => {
    this.setState({refreshing: true})
    console.log(2222);
    axios.get(`${host}/getList`)
      .then( res => {
        this.setState({refreshing: false})
        this.setState((prevState, props)=>({dataSource:[...prevState.dataSource,...res.data]}))
      })
      .catch( error => {
        console.log(error,2222);
        this.setState({refreshing: false})
      }) 
  }
  componentDidMount(){
    for(let i =0; i< 23; i++){
      this.state.dataSource.push({key:`test${i}`})
    }
    this.forceUpdate();
    // this.myRef.props.onRefresh();//启动应用之后，组件刷新
  }

  _HeaderLoading = () => {
    const {refrenTitle } = this.state;
    return(
      <View style={{paddingTop:44}}>
        <Text style={{textAlign:'center'}}>{refrenTitle}</Text>
      </View>
    )
  }

  _renderItems = ({item}) => {
    switch(item.id){
      case 'test_01':
        return <LineSlide />
      case 'test_02':
        return <ListItem leftCoin={true} title='一日三餐' view='查看更多'/>
      default:
        return;
    }
    return(
      <Text>{item.key}</Text>
    )
  }
  render(){
    const {dataSource , refreshing} = this.state;
    return(
      <FlatList
        ref={(self)=>{this.myRef = self}}
        data={dataSource}//数据源
        showsVerticalScrollIndicator={false}
        renderItem={this._renderItems}//渲染子项
        ListEmptyComponent={<Text>暂无数据</Text>}//当列表为空的时候，显示的component.
        horizontal={false}//是否水平方向展示
        refreshing={refreshing}
        onScroll={this._onScroll}
        onRefresh={this._refresh}
        // refreshControl={
        //   <RefreshControl tintColor="#ff0000"
        //                   refreshing={this.state.refreshing}
        //                   onRefresh={this._refresh}
        //                   title={this.state.refrenTitle}
        //                   colors={['#ff0000','#00ff00','#0000ff']}
        //                   progressBackgroundColor="#00ff00"
        //                   />
        // }
      />
    )  
  }
}