import { RefObject, useEffect, useState } from 'react';

export const useTimeUpdate = (
	videoRef: RefObject<HTMLVideoElement>,
	timestamp: number,
	duration: number
) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		videoRef.current?.addEventListener('timeupdate', () => {
			if (!videoRef.current?.currentTime) return;

			if (
				videoRef.current?.currentTime >= timestamp / 1000 &&
				videoRef.current?.currentTime <= timestamp / 1000 + duration
			) {
				setIsVisible(true);
				return;
			}

			setIsVisible(false);
		});

		return () => {
			setIsVisible(false);
		};
	}, [videoRef.current?.duration]);

	return {
		isVisible,
		setIsVisible,
	};
};
