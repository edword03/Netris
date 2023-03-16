import { combineReducers } from '@reduxjs/toolkit';
import { reducer as eventsReducer } from './events/events.slice';

export const rootReducer = combineReducers({
	eventsReducer,
});
