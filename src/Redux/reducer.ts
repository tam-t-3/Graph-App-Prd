import { combineReducers } from "redux";
import graphReducer from "./Graph";
import { GraphState } from "./Graph/types";

export interface CombineReducerType {
  country: GraphState;
}

const reducer = combineReducers({ country: graphReducer });

export default reducer;
