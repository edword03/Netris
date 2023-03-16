import { CSSProperties } from 'react';
import { Portal } from '../Portal';

import styles from './ZoneSquare.module.css';

export const ZoneSquare = ({ width, height, left, top }: CSSProperties) => {
	const cssProperties = { width, height, left, top };

	return (
		<Portal container="#zone-portal">
			<div className={styles.zoneSquare} style={cssProperties}></div>
		</Portal>
	);
};
