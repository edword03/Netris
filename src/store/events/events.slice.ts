import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnalyticEventType } from '@/shared/types/analytics-event.type';

type InitialStateType = {
	isLoading: boolean;
	events: AnalyticEventType[];
	error: string;
};

const initialState: InitialStateType = {
	isLoading: false,
	events: [],
	error: '',
};

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		fetchEvents(state) {
			state.isLoading = true;
		},
		fetchEventsSuccess(state, action: PayloadAction<AnalyticEventType[]>) {
			state.isLoading = false;
			state.events = action.payload;
		},
		fetchEventsError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { reducer, actions } = eventsSlice;
