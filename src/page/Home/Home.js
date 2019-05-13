import React from "react";
import Statusbar from "../../Components/StatusBar";
import { Image } from "react-native";
import {
  Container,
  List,
  ListItem,
  View,
  Button,
  Text,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Icon
} from "native-base";
// import Flast  from ''
import HeaderSeach from "../../Components/HeaderSeach";
import Lineslide from "../../Components/LineSlide";
import { Col, Row, Grid } from "react-native-easy-grid";
import FlatListView from "../../Components/FlatListView";
import Meal from "./Mealitem";
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
        <View style={{ position: "relative", zIndex: 33 }}>
          <Statusbar backgroundColor={"#FFD39B"} />
          <HeaderSeach />
        </View>
        <View style={{ position: "relative",marginBottom:65}}>
            <FlatListView ListHeaderComponent={<Meal />} />
        </View>
      </Container>
    );
  }
}
