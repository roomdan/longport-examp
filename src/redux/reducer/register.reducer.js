import types from "../type/types.js";

const _initial_state_ = false;

export const registerUser_REDUCER = (state = _initial_state_, action) => {
  switch (action.type) {
    case types.user:
      return action.payload;
    default:
      return state;
  }
};
