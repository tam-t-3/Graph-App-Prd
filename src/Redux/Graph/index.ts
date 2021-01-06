import { Reducer } from "react";
import { GraphState, SELECT_UPDATE, SELECTCOUNTRY, ADDCOUNTRY, SUCCESS_LOAD, DELETE_UPDATE } from "./types";
import { GraphActionType } from "./action";

const initState: GraphState = {
  selectedCountryName: "",
  selectedCountryData: [],
  countries: {},
  isLoading: false,
};

const graphReducer: Reducer<GraphState, GraphActionType> = (
  state: GraphState = initState,
  action: GraphActionType
) => {
  switch (action.type) {
    case SELECTCOUNTRY:
      return {
        ...state,
        isLoading: true,
      }
    case SELECT_UPDATE:
      return {
        ...state,
        selectedCountryName: action.payload.country,
        selectedCountryData: action.payload.values,
        isLoading: false,
      }
    case ADDCOUNTRY:
      const values = state.selectedCountryData
      const countryName = state.selectedCountryName
      return {
        ...state,
        countries: Object.assign(state.countries, { [countryName]: values})
      }
    case SUCCESS_LOAD:
      return {
        ...state,
        countries: Object.assign(state.countries, {
          [action.payload.countryName]: action.payload.countries
        })
      }
    case DELETE_UPDATE:
      return {
        ...state,
        countries: action.payload.values
      }
      default:
      return state;
  }
};

export default graphReducer;
