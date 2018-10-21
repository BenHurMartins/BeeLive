import React from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { MapView, Constants, Location, Permissions } from "expo";
import { Button, Fab } from "native-base";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

import {
  toggleNewHiveFormModal,
  toggleNewBeeFormModal
} from "../actions/ModalActions";
import { prepareNewMarker } from "../actions/MarkerActions";
import NewHiveFormModal from "./modal/NewHiveFormModal";
import NewBeeFormModal from "./modal/NewBeeFormModal";

class NewHive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "false",
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      myPosition: {
        latitude: 37.78825,
        longitude: -122.4324
      }
    };
  }

  _getRegion = async () => {
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
      latitudeDelta: 0.0028,
      longitudeDelta: 0.0013
    };
    this.setState({ region });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    var myPosition = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };

    this.setState({ myPosition });
  };

  _handleNewMarker(type) {
    var coordinates = this.state.myPosition;
    if (type == "bee") {
      var newMarker = { coordinates, hive: false };
    } else {
      var newMarker = { coordinates, hive: true };
    }

    this.props.prepareNewMarker(newMarker);
  }

  _handleMarkers(marker) {
    if (marker.hive) {
      console.log("entrou aqui");

      return (
        <MapView.Marker
          coordinate={marker.coordinates}
          title={"Visto pela última vez: " + marker.lastSeen}
        >
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../../assets/hive-map-icon.png")}
          />
        </MapView.Marker>
      );
    } else {
      var imageComponent = () => false;
      switch (marker.size) {
        case 1:
          imageComponent = () => (
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/one-bee.png")}
            />
          );
          break;
        case 2:
          imageComponent = () => (
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/some-bees.png")}
            />
          );
          break;
        case 3:
          imageComponent = () => (
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/lot-of-bees.png")}
            />
          );
          break;
        default:
          break;
      }
      return (
        <MapView.Marker
          coordinate={marker.coordinates}
          title={"Visto pela última vez: " + marker.lastSeen}
        >
          {imageComponent()}
        </MapView.Marker>
      );
    }
  }

  componentWillMount() {
    this.setState({ active: false });

    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getRegion();

      setInterval(() => {
        this._getLocationAsync();
      }, 5000);
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
        >
          <MapView.Marker coordinate={this.state.myPosition}>
            <Image
              style={{ width: 35, height: 55 }}
              source={require("../../assets/my-position-marker.png")}
            />
          </MapView.Marker>
          {this.props.markers.map(marker => {
            return this._handleMarkers(marker);
          })}
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
            style={{ backgroundColor: "#4A4A4A" }}
            onPress={() => {
              this.props.toggleNewHiveFormModal();
              this._handleNewMarker("hive");
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/hive-map-icon.png")}
            />
          </Button>
          <Button
            style={{ backgroundColor: "#4A4A4A" }}
            onPress={() => {
              this.props.toggleNewBeeFormModal();
              this._handleNewMarker("bee");
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/one-bee.png")}
            />
          </Button>
        </Fab>
        <NewHiveFormModal />
        <NewBeeFormModal />
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

mapStateToProps = state => {
  return {
    markers: state.MarkerReducer.markers
  };
};

export default connect(
  mapStateToProps,
  {
    toggleNewHiveFormModal,
    prepareNewMarker,
    toggleNewBeeFormModal
  }
)(NewHive);
