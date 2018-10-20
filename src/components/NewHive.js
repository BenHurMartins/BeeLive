import React from "react";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import { MapView, Constants, Location, Permissions } from "expo";
import { Button, Fab } from "native-base";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

import { toggleNewHiveFormModal } from "../actions/ModalActions";
import { newHive } from "../actions/HiveActions";
import NewHiveFormModal from "./modal/NewHiveFormModal";

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
};

class NewHive extends React.Component {
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
      myPosition: {
        latitude: 37.78825,
        longitude: -122.4324
      }
    };
  }
  locationChanged = location => {
    var region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0057,
      longitudeDelta: 0.0027
    };

    var myPosition = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };

    this.setState({ myPosition, region });
  };

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
      latitudeDelta: 0.0028,
      longitudeDelta: 0.0013
    };

    var myPosition = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };

    console.log(myPosition);

    this.setState({ region, myPosition });
  };

  _handleNewMarker() {
    var coordinates = this.state.myPosition;
    var newHive = { lastSeen: "2018-10-20", coordinates };

    this.props.newHive(newHive);
  }

  componentWillMount() {
    this.setState({ active: false });

    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      //   Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
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
          <MapView.Marker
            coordinate={this.state.myPosition}
            title={"To aqui"}
            description={"To Aqui mesmo"}
          >
            <Image
              style={{ width: 35, height: 55 }}
              source={require("../../assets/my-position-marker.png")}
            />
          </MapView.Marker>
          {this.props.hives.map(hive => (
            <MapView.Marker
              coordinate={hive.coordinates}
              title={"Visto pela última vez: " + hive.lastSeen}
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../../assets/hive-map-icon.png")}
              />
            </MapView.Marker>
          ))}
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
            onPress={() => {
              this.props.toggleNewHiveFormModal();
              this._handleNewMarker();
            }}
          >
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../assets/hive-map-icon.png")}
            />
          </Button>
        </Fab>
        <NewHiveFormModal />
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
    showNewHiveFormModal: state.ModalReducer.showNewHiveFormModal,
    hives: state.HiveReducer.hives
  };
};

export default connect(
  mapStateToProps,
  { toggleNewHiveFormModal, newHive }
)(NewHive);
