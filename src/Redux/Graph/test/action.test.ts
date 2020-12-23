import { GraphActions } from "../action"
import { SELECTCOUNTRY } from '../types'

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

})