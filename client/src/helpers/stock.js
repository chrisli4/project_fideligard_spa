const delta = (currentValue, previousValue) => {
	const d = parseInt(currentValue, 10) - parseInt(previousValue, 10);
	const sign = d >= 0 ? '+' : '-';

	return `${ sign } $${ Math.abs(d) }`;
}

export { delta }