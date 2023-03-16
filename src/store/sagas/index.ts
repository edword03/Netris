import { all } from 'redux-saga/effects';
import { fetchEventsSaga } from './eventsSaga';

export function* rootSaga() {
	yield all([fetchEventsSaga()]);
}
