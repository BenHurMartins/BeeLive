import * as types from "./types";

export const setNewMarker = newMarker => {
  return { type: types.NEW_MARKER, payload: newMarker };
};

export const prepareNewMarker = newMarker => {
  return { type: types.PREPARE_NEW_MARKER, payload: newMarker };
};
