import { View, StyleSheet, Text } from "react-native";
import React from "react";

export default class extends React.PureComponent {
  static defaultProps = {
    data: ["家常菜", "早餐", "宝宝辅食", "食疗养生"]
  };

  render() {
    const { data } = this.props;
    return (
      <View style={Styles.container}>
        {data.map((item, index) => {
          return (
            <View key={index} style={[Styles.item]}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  item: {
    height: 65,
    flexBasis: "24%",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: "#999",
    borderStyle: "solid"
  }
});
