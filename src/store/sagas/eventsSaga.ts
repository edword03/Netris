import { call, put } from 'redux-saga/effects';

import { fetchEvents } from '@/shared/api/fetchEvents';
import { AnalyticEventType } from '@/shared/types/analytics-event.type';

import { actions } from '../events/events.slice';

export function* fetchEventsSaga() {
	try {
		yield put(actions.fetchEvents);

		const response: AnalyticEventType[] = yield call(() =>
			fetchEvents<AnalyticEventType[]>(
				'http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd'
			)
		);

		yield put(
			actions.fetchEventsSuccess([
				...response.sort((a, b) => {
					return (
						new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf()
					);
				}),
			])
		);
	} catch (e: any) {
		yield put(actions.fetchEventsError(e));
	}
}
