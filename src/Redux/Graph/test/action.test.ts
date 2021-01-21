import { GraphActions } from "../action"
import { SELECTCOUNTRY, SELECT_UPDATE,  ADDCOUNTRY, DELCOUNTRY, DELETE_UPDATE } from '../types'

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
    expect(actual).toStrictEqual(action)
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
    expect(actual).toStrictEqual(action)
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
    expect(actual).toStrictEqual(action) 
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
    expect(actual).toStrictEqual(action) 
  })
})