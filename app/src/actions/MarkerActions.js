import * as types from "./types";
import axios from "axios";

export const setNewMarker = newMarker => {
  return async dispatch => {
    axios
      .post("https://beelive-spaceapps.herokuapp.com/hive", newMarker)
      .then(function(response) {
        dispatch({ type: types.NEW_MARKER, payload: newMarker });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

export const prepareNewMarker = newMarker => {
  return { type: types.PREPARE_NEW_MARKER, payload: newMarker };
};

export const getMarkers = () => {
  return async dispatch => {
    axios
      .get("https://beelive-spaceapps.herokuapp.com/hive")
      .then(response => {
        dispatch({ type: types.SET_MARKERS, payload: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};
