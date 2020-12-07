import { takeEvery, put, call, select } from "redux-saga/effects";
import { SELECTCOUNTRY } from "./types";
import { GraphActionType, GraphActions } from "./action";
import { db, } from "../../Firebase/base";
import { CombineReducerType } from "../reducer";

// type FirebaseDoc = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>

function* graphSaga() {
  yield takeEvery(SELECTCOUNTRY, calcSelectCountry);
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

export default graphSaga;