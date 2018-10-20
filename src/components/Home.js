import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 190, height: 190 }}
          source={require("../../assets/bee-home.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
