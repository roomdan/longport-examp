import type from "../type/types.js";

const initial_state = "";

export const Get_Countries_Reducer = (state = initial_state, action) => {
  switch (action.type) {
    case type.countries:
      return action.payload;
    default:
      return state;
  }
};
