import types from "../type/types.js";

const _initial_state_ = "";

export const getTeams_REDUCER = (state = _initial_state_, action) => {
  switch (action.type) {
    case types.teams:
      return action.payload;
    default:
      return state;
  }
};
