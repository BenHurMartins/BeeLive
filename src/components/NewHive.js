import React from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { MapView, Constants, Location, Permissions } from "expo";
import { Button, Fab } from "native-base";
import { Icon } from "react-native-elements";

export default class NewHive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "false",
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      myPosition: {}
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    var region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0461,
      longitudeDelta: 0.0211
    };

    var myPosition = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };

    this.setState({ region, myPosition });
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          mapType={"satellite"}
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.region}
          // onRegionChange={region => this.onRegionChange(region)}
        >
          <MapView.Marker
            coordinate={this.state.myPosition}
            title={"To aqui"}
            description={"To Aqui mesmo"}
          >
            <Image
              style={{ width: 35, height: 55 }}
              source={require("../assets/my-position-marker.png")}
            />
          </MapView.Marker>
        </MapView>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#FBE312" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="add" color={"#4A4A4A"} />
          <Button
            style={{ backgroundColor: "transparent" }}
            onPress={() => console.log("teste")}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../assets/hive-map-icon.png")}
            />
          </Button>
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
