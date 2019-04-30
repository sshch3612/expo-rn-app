import React from 'react';
import {View , Image} from 'react-native';

export default function (props){
  const style = {height:props.size,width:props.size,borderRadius:(props.round?props.size/2:null),overflow:'hidden'}
  return(
    <React.Fragment>
       <View style={{...style,...props.style}}>
        <Image  style={{height:'100%',width:'100%'}}
            source={{uri:'http://img1.hoto.cn/haodou/g/4/20190307/8ae32761794.jpg?v=155195442657'}}
          ></Image>
       </View>
    </React.Fragment>
  )
}
//、border-top-right-radius、border-bottom-right-radius、border-bottom-left-radius