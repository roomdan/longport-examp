import types from "../type/types.js";

export const ControlleView_REDUCER = (state = "leage", action) => {
  switch (action.type) {
    case types.activeView:
      return action.payload;
    default:
      return state;
  }
};
