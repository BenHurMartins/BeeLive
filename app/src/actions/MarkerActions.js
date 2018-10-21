import * as types from "./types";
import axios from "axios";

export const setNewMarker = newMarker => {
  return async dispatch => {
    axios
      .post("https://beelive-spaceapps.herokuapp.com/hive", newMarker)
      .then(function(response) {
        console.log(response);
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
