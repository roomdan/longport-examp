import types from "../type/types.js";

const _initial_state_ = "";

export const getStatistics_REDUCER = (state = _initial_state_, action) => {
  switch (action.type) {
    case types.statics:
      return action.payload;
    default:
      return state;
  }
};
