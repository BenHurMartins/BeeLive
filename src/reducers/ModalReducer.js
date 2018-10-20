const INITIAL_STATE = {
  showNewHiveFormModal: false
};

import * as types from "../actions/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_NEW_HIVE_FORM_MODAL:
      return { ...state, showNewHiveFormModal: !state.showNewHiveFormModal };
    default:
      return state;
  }
};
