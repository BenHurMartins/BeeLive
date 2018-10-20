import React from 'react';
import { StyleSheet, Text, View, Platform, YellowBox } from 'react-native';
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
  

const MainTab = createTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          title: "Home",
          tabBarIcon: ({ focused, tintColor }) => {
            if (focused) {
              return <Icon name={"home"} color={'yellow'} />;
            } else {
              return <Icon name={"home"} />;
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
              return <Icon name={"edit"} color={'yellow'} />;
            } else {
              return <Icon name={"edit"} />;
            }
          }
        }
      }
    },
    {
      tabBarOptions: {
        activeTintColor: 'yellow',
        style: {
          backgroundColor: 'white',
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
    return (
        <MainTab/>
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
});
