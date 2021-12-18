import types from "../type/types";

const params = {
  season: "",
  legague: "",
  team: "",
};

export const paramsStatisitics_REDUCER = (state = params, action) => {
  switch (action.type) {
    case types.paramsStatistics:
      return action.payload;
    default:
      return state;
  }
};
