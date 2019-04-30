import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {BottomTab } from './src/BottomTab';

export default class App extends React.Component {
  render() {
    return (
        <BottomTab />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 36,
  }
});
