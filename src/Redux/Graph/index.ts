import { Reducer } from "react";
import { GraphState, SELECT_UPDATE, SELECTCOUNTRY } from "./types";
import { GraphActionType } from "./action";

const initState: GraphState = {
  selectedCountryName: "",
  selectedCountryData: [],
};

const graphReducer: Reducer<GraphState, GraphActionType> = (
  state: GraphState = initState,
  action: GraphActionType
) => {
  switch (action.type) {
    case SELECT_UPDATE:
      return {
        ...state,
        selectedCountryName: action.payload.country,
        selectedCountryData: action.payload.values,
      }
      default:
      return state;
  }
};

export default graphReducer;
