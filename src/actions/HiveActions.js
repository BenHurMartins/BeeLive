import * as types from "./types";

export const newHive = newHive => {
  return { type: types.NEW_HIVE, payload: newHive };
};
