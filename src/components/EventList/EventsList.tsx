import { FC, RefObject } from 'react';
import { EventItem } from './EventItem';
import { useAppSelector } from '@/store/hooks/useAppSelector';

import styles from './EventList.module.css';

type EventListProps = {
	videoRef: RefObject<HTMLVideoElement>;
};

export const EventsList: FC<EventListProps> = ({ videoRef }) => {
	const { events, isLoading, error } = useAppSelector(
		(store) => store.eventsReducer
	);

	return (
		<>
			<ul className={styles.eventList}>
				{isLoading && <p>Loading...</p>}
				{events &&
					events.map(({ id, zone, timestamp, duration }, index) => (
						<EventItem
							key={timestamp}
							timestamp={timestamp}
							duration={duration}
							id={id}
							zone={zone}
							videoRef={videoRef}
							count={index + 1}
						/>
					))}
			</ul>
			<div>{error && <p>Ops. Something went wrong</p>}</div>
		</>
	);
};
