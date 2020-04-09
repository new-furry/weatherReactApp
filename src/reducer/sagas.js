/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

import mainSaga from "../saga/mainSaga";

export default function* rootSaga() {
    yield all([
        // Pages
        mainSaga(),
    ]);
}
