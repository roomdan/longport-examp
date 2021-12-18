import types from "../type/types.js";

const _initial_state_ = "";

export const getLeages_REDUCER = (state = _initial_state_, action) => {
  switch (action.type) {
    case types.leages:
      return action.payload;
    default:
      return state;
  }
};
