const moment = require('moment');

const unixToMoment = (unixTime) => {
	return moment.unix(unixTime);
}

const unixToString = (unixTime) => {
	return unixToMoment(unixTime).format('YYYY-MM-DD');
}

const unixToFormatted = (unixTime) => {
	return moment.unix(unixTime).format('MMMM DD, YYYY');
}

module.exports = { unixToString, unixToFormatted }