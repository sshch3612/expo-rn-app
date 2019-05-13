import React from 'react';
import {View,Text, ScrollView, Image,ActivityIndicator,StyleSheet} from 'react-native';
import {scaleSizeW, scaleSizeH, setSpText } from '../util/flex' 

const renderItems = [{url:'http://img1.hoto.cn/haodou/g/4/20190307/8ae325aa7c6.jpg?v=155195442639',title:'韭菜鸡蛋饼'},{url:'http://img1.hoto.cn/haodou/g/4/20190307/8ae32761794.jpg?v=155195442657',title:'鱼丁炒茄子'},
{url:'http://img1.hoto.cn/haodou/g/4/20190307/8ae3292deeb.jpg?v=155195442676',title:'咕噜虾球'},{url:'http://img1.hoto.cn/haodou/g/4/20190307/8ae32ae8cca.jpg?v=155195442692',title:'红糖酒酿南瓜小圆子酒酿南瓜小圆子酒酿南瓜小圆子'}]

/**
 *该组件中 描述了 Text/ScrollView组件的使用
 *
 * @export
 * @class LineSlide
 * @extends {React.PureComponent}
 */
export default class  extends React.PureComponent{

  _renderItem = () => {
    return renderItems.map((item, index) =>(
      <View key={index} style={style.imagecontainer}>
        <Image style={style.imagecontent} source={{uri:`${item.url}`}} />
          <Text style={style.imagetext}
          ellipsizeMode='tail'
          numberOfLines={1}
          >{item.title}</Text>
      </View> 
    ) )
  }
  render(){
    return(
      <View style={style.scrollView}>
        <ScrollView
          horizontal={true}//水平滚动
          showsHorizontalScrollIndicator={false}//表示是否显示水平与垂直的滑动指示器，为布尔类型。
        >
          {this._renderItem()} 
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  scrollView:{

  },
  imagecontainer:{
    width:scaleSizeW(350),
    height:scaleSizeH(270),
    marginRight:10,
    display: 'flex',
  },
  imagecontent: {
    flex:1,
    resizeMode:'stretch',
    marginBottom:5,
  },
  imagetext: {
    fontSize:setSpText(24),
  }
})