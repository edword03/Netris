import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
	container: string;
};

export const Portal: FC<PropsWithChildren<PortalProps>> = ({
	children,
	container,
}) => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		containerRef.current = document.querySelector(container);

		setIsMounted(true);
	}, []);

	return isMounted && containerRef.current
		? createPortal(<>{children}</>, containerRef.current)
		: null;
};
