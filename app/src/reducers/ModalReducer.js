const INITIAL_STATE = {
  showNewHiveFormModal: false,
  showNewBeeFormModal: false
};

import * as types from "../actions/types";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_NEW_HIVE_FORM_MODAL:
      return { ...state, showNewHiveFormModal: !state.showNewHiveFormModal };
    case types.TOGGLE_NEW_BEE_FORM_MODAL:
      console.log("show new bee form modal");

      return { ...state, showNewBeeFormModal: !state.showNewBeeFormModal };
    default:
      return state;
  }
};
