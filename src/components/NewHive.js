import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { MapView, Constants, Location, Permissions } from "expo";

export default class NewHive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };

    var myPosition = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };

    console.log("imprimindo");
    console.log(MapView.Marker);

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
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        style={styles.map}
        region={this.state.region}
        // onRegionChange={region => this.onRegionChange(region)}
      >
        <MapView.Marker
          coordinate={this.state.myPosition}
          title={"To aqui"}
          description={"To Aqui mesmo"}
        />
        <Text>Teste</Text>
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
