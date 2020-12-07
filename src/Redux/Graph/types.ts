// Action Type
export const SELECTCOUNTRY = "GRAPH/SELECTCOUNTRY" as const;
export const SELECT_UPDATE = "GRAPH/SELECT_UPDATE" as const;

// State
export interface GraphState {
  selectedCountryName: string;
  selectedCountryData: GraphModel[];
}

export type GraphModel = {
  Age: string,
  Country: string,
  Population: number,
  Year: number,
  docId: string,
}