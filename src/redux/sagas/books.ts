import { takeEvery, put } from "redux-saga/effects";
import { Book, saveAllBooks } from "../slices/books";

function* workerFetchBooks() {
  const books: Book[] = yield fetch(
    "https://my-bookk.vercel.app/api/book"
  ).then((response) => response.json());

  yield put(saveAllBooks(books));
}

export function* watchFetchBooks() {
  yield takeEvery("FETCH_BOOKS", workerFetchBooks);
}
