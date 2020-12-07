import { SELECTCOUNTRY, SELECT_UPDATE, GraphModel, ADDCOUNTRY, LOAD, SUCCESS_LOAD } from "./types";

type CountriesType = { [countryName: string]: GraphModel[] };

export const GraphActions = {
  SelectCountry: (value: string) => ({
    type: SELECTCOUNTRY,
    payload:{
      country: value,
    }
  }),
  SelectUpdate: (country: string, values: GraphModel[]) => ({
    type: SELECT_UPDATE,
    payload: {
      country,
      values,
    }
  }),
  AddCountry: (country: string) => ({
    type: ADDCOUNTRY,
    payload: {
      country
    },
  }),
  Load: () => {
    return {
      type: LOAD,
    }
  },
  LoadSuccess: (countryName: string, countries: CountriesType) => {
    return {
      type: SUCCESS_LOAD,
      payload: {
        countryName,
        countries
      }
    }
  }
};

export type GraphActionType =
 | ReturnType<typeof GraphActions.SelectCountry>
 | ReturnType<typeof GraphActions.SelectUpdate>
 | ReturnType<typeof GraphActions.AddCountry>
 | ReturnType<typeof GraphActions.Load>
 | ReturnType<typeof GraphActions.LoadSuccess>