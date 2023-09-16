import { all } from "redux-saga/effects";
import { watchFetchBooks } from "./sagas/books";

export default function* rootSaga() {
  yield all([watchFetchBooks()]);
}
