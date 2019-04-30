import React from 'react';
import {
  WebView,
  ActivityIndicator
}from 'react-native';

export default class extends React.PureComponent{
  render(){
    const {uri ,...rest} = this.props;
    return(
      <WebView 
        source={{uri:uri}}
        startInLoadingState={true}
        renderLoading={ ()=>{
            return <ActivityIndicator size="large" color='#00ff00'/>
            }}
        rest
      />
    )
  }
}