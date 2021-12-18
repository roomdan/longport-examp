import types from "../type/types";

export const changeContent = (payload) => ({
  type: types.activeView,
  payload,
});
