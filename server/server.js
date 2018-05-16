require('dotenv').config({path: '../.env'});
require('es6-promise').polyfill();
require('isomorphic-fetch')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 3001

const API_CLIENT_KEY = process.env.API_CLIENT_KEY
const baseUrl = `https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?api_key=${ API_CLIENT_KEY }&qopts.columns=ticker,date,close`
const moment = require('moment-holiday');

const staticFiles = express.static(path.join(__dirname, '../../client/build'))

function checkStatus(response) {
	if(!response.ok) {
		const error = new Error(response.statusText)
		error.response = response
		throw error
	}

	return response
}

function parseJSON(response) {
	return response.json()
}

function errorHandler (err, req, res, next) {
	res.status(err.response ? err.response.status : 500)
	res.json({ error: err.message })
}

const isValid = (date) => {
	return moment(date, 'YYYY-MM-DD', true).isValid();
}

const dayDiff = (date, days) => {
	return moment(date, 'YYYY-MM-DD').subtract(days, 'days').format('YYYY-MM-DD').toString();
}

const removeWeekendsHolidays = (date) => {
	let correctedDate = moment(date, 'YYYY-MM-DD')
	while(correctedDate.day() === 0 || correctedDate.day() === 6 || (correctedDate.isHoliday() !== false)) {
		correctedDate = correctedDate.subtract(1, 'days')
	}
	return correctedDate.format('YYYY-MM-DD').toString();
}

const parseResults = (data, endDate) => {

	const dateArr = [{
		diff: 'today',
		date: removeWeekendsHolidays(endDate)
	}, {
		diff: 'oneDay',
		date: removeWeekendsHolidays(dayDiff(endDate, 1))
	}, {
		diff: 'sevenDays',
		date: removeWeekendsHolidays(dayDiff(endDate, 7))
	}, {
		diff: 'thirtyDays',
		date: removeWeekendsHolidays(dayDiff(endDate, 30))
	}];

	console.log(dateArr[3])

	const results = data.reduce((acc, curr, i) => {

		const name = curr[0];
		const date = curr[1];
		const price = curr[2];
		dateArr.forEach(obj => {
			if(obj.date === date) {
				acc.data[name] = acc.data[name] || {};
				acc.data[name]['symbol'] = name;
				acc.data[name][obj.diff] = price;
			}
		})
		return acc;
	}, { data: {} })
	return Object.keys(results.data).map(key => {
		return results.data[key];
	})
}

express()
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended: false}))
.use(staticFiles)
.use(express.static(path.join(__dirname, 'public')))
.get('/api/v1/stocks', (req, res, next) => {

	const symbols = req.query.symbols

	const endDate = req.query.end_date
	const startDate = dayDiff(endDate, 40)

	console.log(`${ baseUrl }&ticker=${ symbols }&date.gte=${ startDate }&date.lte=${ endDate }`)

	fetch(`${ baseUrl }&ticker=${ symbols }&date.gte=${ startDate }&date.lte=${ endDate }`)
	.then(checkStatus)
	.then(parseJSON)
	.then(json => {
		res.json(parseResults(json.datatable.data, endDate))
	})
	.catch(e => {
		next(e);
	})
})
.use('/', staticFiles)
.listen(PORT, () => console.log(`Listening on ${ PORT }`))