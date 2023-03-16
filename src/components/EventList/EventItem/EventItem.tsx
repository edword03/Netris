import { FC, RefObject } from 'react';

import { useTimeUpdate } from '@/components/EventList/EventItem/useTimeUpdate';
import { AnalyticEventType } from '@/shared/types/analytics-event.type';
import { dateFormater } from '@/shared/utils/dateFormater';

import { ZoneSquare } from '../../ZoneSquare';

import styles from './EventItem.module.css';

type EventItemProps = AnalyticEventType & {
	videoRef: RefObject<HTMLVideoElement>;
	count: number;
};

export const EventItem: FC<EventItemProps> = ({
	id,
	zone,
	duration,
	timestamp,
	videoRef,
	count,
}) => {
	const { isVisible } = useTimeUpdate(videoRef, timestamp, duration);

	const onClickToTime = () => {
		if (videoRef.current) {
			videoRef.current.currentTime = timestamp / 1000;
		}
	};

	const zoneStyle = {
		width: zone.width,
		height: zone.height,
		left: zone.left,
		top: zone.top,
	};

	return (
		<>
			<li className={styles.eventItem} onClick={onClickToTime}>
				<span>{count}.</span>
				<span className={styles.eventItemText}>{dateFormater(timestamp)}</span>
				<span></span>
			</li>
			{isVisible && <ZoneSquare {...zoneStyle} />}
		</>
	);
};
