export const fetchEvents = async <T>(url: string): Promise<T> => {
	try {
		const response: Response = await fetch(url);

		return await response.json();
	} catch (e) {
		console.error(e);
		throw new Error('Network error');
	}
};
