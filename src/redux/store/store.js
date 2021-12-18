import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

//all reducers

import { registerUser_REDUCER } from "../reducer/register.reducer";
import { Get_Countries_Reducer } from "../reducer/countries.reducer";
import { getLeages_REDUCER } from "../reducer/leages.get.reducer";
import { ControlleView_REDUCER } from "../reducer/contentController.reducer";
import { getTeams_REDUCER } from "../reducer/teams.get.reducer";
import { seasons_REDUCER } from "../reducer/seasons.reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  registerUser_REDUCER,
  Get_Countries_Reducer,
  ControlleView_REDUCER,
  getLeages_REDUCER,
  getTeams_REDUCER,
  seasons_REDUCER,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
