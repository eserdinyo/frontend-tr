import { put, takeEvery } from 'redux-saga/effects'

import * as constants from '../store/constants';
import * as api from '../api';


function* fetchCompanies() {
    try {
        const res = yield api.fetchCompanies();
        yield put({ type: constants.FETCH_COMPANIES_OK, payload: res })
    } catch (err) {
        console.log(err);
    }
}


function* mySaga() {
    yield takeEvery(constants.FETCH_COMPANIES, fetchCompanies);
}

export default mySaga;