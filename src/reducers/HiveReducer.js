const INITIAL_STATE = {
  hives: [],
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
