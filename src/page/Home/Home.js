import React from 'react';
import {View ,Text, Platform, NativeModules, WebView, FlatList} from 'react-native';
import StatusBar from '../../Components/StatusBar';
import { Header } from 'react-native-elements';
import HeaderSearch from '../../Components/HeaderSeach';
// import {WebView} from 'react-native-webview';
import SearchBar from '../../Components/SearchBar';
import FlatListView from '../../Components/FlatListView';
import LineSlide from '../../Components/LineSlide';
import ListItem from '../../Components/ListItem'
import ScrollView from '../../Components/ScrollView';

export default class  Home extends React.Component{
  static navigationOptions = {
    header: null,
  }
  _refresh = (e)=>{
      console.log(e,111);
  }
  render(){
    return(
      <View style={{flex:1}}>
        <StatusBar backgroundColor='#eacd77'/>
        <HeaderSearch />
        <FlatListView />
        <SearchBar />
    </View>
    )  
  }
}