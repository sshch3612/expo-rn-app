import React from "react";
import Statusbar from "../../Components/StatusBar";
import { Container, View, Button, Text, Content } from "native-base";
import HeaderSeach from "../../Components/HeaderSeach";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  _refresh = e => {
    console.log(e, 111);
  };
  render() {
    return (
      <Container>
        <View>
          <Statusbar backgroundColor={"#FFD39B"} />
          <HeaderSeach />
        </View>
        <Content>
          
        </Content>
      </Container>
    );
  }
}
