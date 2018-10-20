import * as types from "./types";

export const setNewHive = newHive => {
  console.log("newHive");
  console.log(newHive);

  return { type: types.NEW_HIVE, payload: newHive };
};

export const prepareNewHive = newHive => {
  return { type: types.PREPARE_NEW_HIVE, payload: newHive };
};
