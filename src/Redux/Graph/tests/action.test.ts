import { GraphActions } from "../action"
import { ADDCOUNTRY, DELCOUNTRY, DELETE_UPDATE, SELECTCOUNTRY, SELECT_UPDATE } from '../types'

describe("actionのテスト", () => {

  test("SelectCoutnryアクションのテスト", () => {
    const country = "japan"
    const action = {
      type: SELECTCOUNTRY,
      payload: {
        country
      }
    }
    const actual = GraphActions.SelectCountry(country)
    expect(actual).toBe(action)
  })

  test("SelectUpdateアクションテスト", () => {
    const country = "japan"
    const values = [{
        Age: "",
        Country: country,
        Population: 1000,
        Year: 2020,
        docId: ""
    }]
    const action = {
      type: SELECT_UPDATE,
      payload: {
        country,
        values
      }
    }
    const actual = GraphActions.SelectUpdate(country, values)
    expect(actual).toBe(action)
  })

  test("AddCountryアクションのテスト", () => {
    const country = "japan"
    const action = {
      type: ADDCOUNTRY,
      payload: {
        country
      }
    }
    const actual = GraphActions.AddCountry(country)
    expect(actual).toBe(action) 
  })

  test("DeleteCountryアクションのテスト", () => {
    const country = "japan"
    const action = {
      type: DELCOUNTRY,
      payload: {
        country
      }
    }
    const actual = GraphActions.DelCountry(country)
    expect(actual).toBe(action) 
  })

  test("DeleteUpdateアクションのテスト", () => {
    const country = "japan"
    const values = {"japan": [{
      Age: "",
      Country: country,
      Population: 1000,
      Year: 2020,
      docId: ""
    }]}
    const action = {
      type: DELETE_UPDATE,
      payload: {
        country
      }
    }
    const actual = GraphActions.DeleteUpdate(values)
    expect(actual).toBe(action)
  })

})