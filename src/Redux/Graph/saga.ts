import { takeEvery, put, call, select } from "redux-saga/effects";
import { SELECTCOUNTRY, ADDCOUNTRY, LOAD, DELCOUNTRY } from "./types";
import { GraphActionType, GraphActions } from "./action";
import { db, } from "../../Firebase/base";
import { CombineReducerType } from "../reducer";

//type FirebaseDoc = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>

function* graphSaga() {
  yield takeEvery(SELECTCOUNTRY, calcSelectCountry);
  yield takeEvery(ADDCOUNTRY, calcAddCountry);
  yield takeEvery(DELCOUNTRY, calcDelCountry);
}

/**
 * Firestoreと通信して地域のデータを取得する関数
 */
function* calcSelectCountry(action: GraphActionType) {
  console.log(action)
  // @ts-ignore: Unrechable code error
  const country = action.payload.country
  console.log(country)
  const snapshot = yield call(fetch, country);
  const response = snapshot.docs.map((doc: any ) => doc.data())

  // Updateアクションを発行
  yield put(GraphActions.SelectUpdate(country, response));
}

/**
 *  Firestoreからのデータ取得はラップ必要
 */
const fetch = async (country: string) => {
  const colRef = db.collection("graphs").where("Country", "==", country).orderBy("Year")
  const data = await colRef.get()
  return data
};

/**
 * Add Country
 */

 function* calcAddCountry(action: GraphActionType) {
  // @ts-ignore: Unreachable code error
  const country = action.payload.country
  const snapshot = yield call(fetch, country);
  const response = snapshot.docs.map((doc: any ) => doc.data())

  // Firebase上に登録するyieldをここに追加予定

  yield put(GraphActions.SelectUpdate(country, response));
 }

/**
 * 地域データの削除
 */

function* calcDelCountry(action: GraphActionType) {
  // @ts-ignore: Unreachable code error
  const country = action.payload.country;
  const countries = yield select( (state: CombineReducerType) => state.country.countries)
  delete countries[country]

  yield put(GraphActions.DeleteUpdate(countries))
}

export default graphSaga;