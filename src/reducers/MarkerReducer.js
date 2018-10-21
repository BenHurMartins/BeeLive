const INITIAL_STATE = {
  markers: [
    {
      coordinates: { latitude: -15.756566, longitude: -47.877536 },
      hive: true
    },
    {
      coordinates: { latitude: -15.757567, longitude: -47.878195 },
      hive: false,
      size: 1
    },
    {
      coordinates: { latitude: -15.756805, longitude: -47.878488 },
      hive: false,
      size: 3
    }
  ],
  newMarker: ""
};

import * as types from "../actions/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PREPARE_NEW_MARKER:
      return { ...state, newMarker: action.payload };
    case types.NEW_MARKER:
      return { ...state, markers: [...state.markers, action.payload] };
    default:
      return state;
  }
};
