import * as types from "./types";

export const toggleNewHiveFormModal = () => {
  return { type: types.TOGGLE_NEW_HIVE_FORM_MODAL };
};

export const toggleNewBeeFormModal = () => {
  return { type: types.TOGGLE_NEW_BEE_FORM_MODAL };
};
