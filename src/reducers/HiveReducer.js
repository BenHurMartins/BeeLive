const INITIAL_STATE = {
  hives: [
    { coordinates: { latitude: -15.756566, longitude: -47.877536 } },
    { coordinates: { latitude: -15.757567, longitude: -47.878195 } },
    { coordinates: { latitude: -15.756805, longitude: -47.878488 } }
  ],
  newHive: ""
};

import * as types from "../actions/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PREPARE_NEW_HIVE:
      return { ...state, newHive: action.payload };
    case types.NEW_HIVE:
      var hives = state.hives;
      return { ...state, hives: [...hives, action.payload] };
    default:
      return state;
  }
};
