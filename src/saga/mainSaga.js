import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/mainAction";

import {GET_FORECAST, GET_REGION} from "../reducer/Types";

import api from "../api";

//=========================
// REQUESTS
//=========================
const getRegionFromDBRequest = async () => {
    const result = await api.get(`http://api.ipma.pt/open-data/distrits-islands.json`);
    return result.data;
};
const getForecastFromDBRequest = async (regionId) => {
    const id = regionId;
    const result = await api.get(`http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${id}.json`);
    return result.data;
};


//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getRegionFromDB() {
    try {
        const data = yield call(getRegionFromDBRequest);
        yield put(actions.getRegionSuccess(data));
    } catch (error) {
        yield put(actions.getRegionFailure(error));
    }
}
function* getForecastFromDB({payload}) {
    try {
        const data = yield call(getForecastFromDBRequest, payload);
        yield put(actions.getForecastSuccess(data));
    } catch (error) {
        yield put(actions.getForecastFailure(error));
    }
}


//=======================
// WATCHER FUNCTIONS
//=======================
export function* getRegionWatcher() {
    yield takeEvery(GET_REGION, getRegionFromDB);
}
export function* getForecastWatcher() {
    yield takeEvery(GET_FORECAST, getForecastFromDB);
}


//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
    yield all([
        fork(getRegionWatcher),
        fork(getForecastWatcher),
    ]);
}
