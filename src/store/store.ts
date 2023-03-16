import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV === 'development',

	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(sagaMiddleware);
	},
});

export type AppState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
