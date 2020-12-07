import { SELECTCOUNTRY, SELECT_UPDATE, GraphModel } from "./types";

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
  })
};

export type GraphActionType =
 | ReturnType<typeof GraphActions.SelectCountry>
 | ReturnType<typeof GraphActions.SelectUpdate>