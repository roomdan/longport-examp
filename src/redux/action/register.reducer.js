import types from "../type/types.js";

export const register_action = (payload) => ({
  type: types.user,
  payload,
});
