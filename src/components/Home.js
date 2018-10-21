import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text } from "react-native-elements";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 190, height: 190 }}
          source={require("../../assets/bee-home.png")}
        />
        <Text h4 style={styles.label}>
          {" "}
          Oi Luís, você já nos ajudou a cadastrar 13 colméias!
        </Text>
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
  },
  label: {
    margin: 30,
    color: "#4A4A4A",
    textAlign: "center"
  }
});
