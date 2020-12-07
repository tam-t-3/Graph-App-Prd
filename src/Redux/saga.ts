import { all, fork } from "redux-saga/effects";
import graphSaga from "./Graph/saga";

export default function* saga() {
  yield all([fork(graphSaga)]);
}