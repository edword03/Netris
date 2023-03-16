import { forwardRef } from 'react';

import styles from './VideoPlayer.module.css';

type VideoPlayerProps = {
	videoSrc: string;
};

export const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
	({ videoSrc }, ref) => {
		return (
			<div className={styles.videoContainer}>
				<video controls ref={ref}>
					<source src={videoSrc} type="video/mp4" />
				</video>
				<div id="zone-portal"></div>
			</div>
		);
	}
);
