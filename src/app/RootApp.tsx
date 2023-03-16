import { FC, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { VideoPlayer } from '@/components/VideoPlayer';
import { EventsList } from '@/components/EventList';

import { VIDEO_URL } from '@/shared/const/video';

import { fetchEvents } from '@/store/sagas/sagaActions';

import './styles/index.css';

export const RootApp: FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEvents());
	}, []);

	return (
		<div className="App">
			<VideoPlayer videoSrc={VIDEO_URL} ref={videoRef} />
			<EventsList videoRef={videoRef} />
		</div>
	);
};
