import { CombineReducerType } from "../reducer";
import { db, auth } from "../../Firebase/base";
import { GraphActionType, GraphActions } from "./action";
import { SELECTCOUNTRY, ADDCOUNTRY, LOAD, DELCOUNTRY, UserDataType, } from "./types";
import { takeEvery, put, call, select } from "redux-saga/effects";

function* graphSaga() {
  yield takeEvery(SELECTCOUNTRY, calcSelectCountry);
  yield takeEvery(ADDCOUNTRY, calcAddCountry);
  yield takeEvery(DELCOUNTRY, calcDelCountry);
  yield takeEvery(LOAD, loadUserData);
}

/**
 * ユーザーデータ取得
 */

function* loadUserData() {
  const countries: string[] = yield call(requestUserData);
  if (!countries["length"]) return;

  console.log(countries);
  for(let i = 0; i < countries.length; ++i) {
    const country = countries[i];
    const snapshot = yield call(fetch, country);
    const response = snapshot.docs.map((doc: any ) => doc.data())
    // Updateアクションを発行
    yield put(GraphActions.LoadSuccess(country, response));
  }
}

/**
 * ユーザーデータ取得
 */
const requestUserData = async (): Promise<string[]> => {
  const userId = auth().currentUser?.uid;
  if (!userId) return [];
  console.log(userId);
  const ref = db.collection("users").doc(userId);
  const response = await ref.get()
  const data = response.data() as UserDataType;
  return (!data) ? [] : data.countries;
}

/**
 * Firestoreと通信して地域のデータを取得する関数
 */
function* calcSelectCountry(action: GraphActionType) {
  console.log(action)
  // @ts-ignore: Unreachable code error
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

  // Firebase上に登録
  yield call(requestUpdate, country)

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

  yield call(requestDelete, country);
  yield put(GraphActions.DeleteUpdate(countries))
}

/**
 * Firebaseに現在選択している国を追加する
 * @param country 追加する国データ
 */
const requestUpdate = async (country: string) => {
  await updateUser(country);
}

/**
 * @param country
 * 
 */
const updateUser = async (country: string) => {
  const userId = auth().currentUser?.uid
  const ref = db.collection("users").doc(userId);
  const snapShot = await ref.get()
  const data = snapShot.data() as UserDataType;
  if (!data && userId) {
    // ユーザーとして存在していればユーザーデータ作成
    createUserData(userId, country);
  } else {
    // 追加処理
    if (data.countries.includes(country)) return;
    await ref.set({
      countries: data.countries.concat([country])
    })
  }
}

/**
 * ユーザー新規作成
 * @param userId
 * @param country
 */
const createUserData = async (userId: string, country: string) => {
  const ref = await db.collection("users")
  await ref.doc(userId).set({
    countries: [country]
  })
}

/**
 * Firebaseから削除する地域データ
 * @param country 削除する地域データ
 */
const requestDelete = async (country: string) => {
  const userId = auth().currentUser?.uid;
  if (userId) {
    const ref = db.collection("users").doc(userId);
    const data = await (await ref.get()).data() as UserDataType;
    const filteredCountries = data.countries.filter(d => d !== country)
    await ref.set({
      countries: filteredCountries
    })
  }
}

export default graphSaga;