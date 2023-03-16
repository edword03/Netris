export enum SagaActions {
	FETCH_EVENTS = 'FETCH_EVENTS',
}

export const fetchEvents = () => {
	return {
		type: SagaActions.FETCH_EVENTS,
	};
};
