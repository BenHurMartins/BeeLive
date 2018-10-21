import React from "react";
import { StyleSheet, View, Image, Platform, YellowBox } from "react-native";
import { Icon } from "react-native-elements";
import {
  createSwitchNavigator,
  createStackNavigator,
  navigation,
  createTabNavigator
} from "react-navigation";

import Home from "./components/Home";
import NewHive from "./components/NewHive";

YellowBox.ignoreWarnings([
  "Warning: Each",
  "Remote debugger",
  "Method",
  "Module",
  "createTabNavigator",
  "Warning:",
  "Class RCTC",
  "Possible Unhandled Promise Rejection (id: 0):"
]);

const customHeader = () => {
  return (
    <View style={{ alignItems: "flex-start", flex: 1, paddingLeft: 35 }}>
      <Image
        style={{ width: 200, height: 60 }}
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: customHeader(),
      headerTintColor: "#4A4A4A",
      headerStyle: {
        height: 90,
        backgroundColor: "#FBE312",
        elevation: 0,
        shadowOpacity: Platform.OS === "ios" ? 8 : 0,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        }
      }
    })
  }
});

const NewHiveStack = createStackNavigator({
  Home: {
    screen: NewHive,
    navigationOptions: ({ navigation }) => ({
      headerTitle: customHeader(),
      headerTintColor: "#4A4A4A",
      headerStyle: {
        height: 110,
        backgroundColor: "#FBE312",
        elevation: 0,
        shadowOpacity: Platform.OS === "ios" ? 8 : 0,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        }
      }
    })
  }
});

const MainTab = createTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused, tintColor }) => {
          if (focused) {
            return (
              <Icon type={"font-awesome"} name={"forumbee"} color={"#4A4A4A"} />
            );
          } else {
            return <Icon type={"font-awesome"} name={"forumbee"} />;
          }
        }
      }
    },
    NewHive: {
      screen: NewHive,
      navigationOptions: {
        title: "Nova Colméia",
        tabBarIcon: ({ focused, tintColor }) => {
          if (focused) {
            return <Icon name={"map"} color={"#4A4A4A"} />;
          } else {
            return <Icon name={"map"} />;
          }
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#4A4A4A",
      style: {
        backgroundColor: "#FBE312",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default class Routes extends React.Component {
  render() {
    //   <View style={styles.container}>
    //     <Text>Open up App.js start working on your app!!!!</Text>
    //   </View>
    return <MainTab />;
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
