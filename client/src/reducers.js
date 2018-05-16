import * as Actions from './actions';
import { combineReducers } from 'redux';

const initState = {
	date: '2014-05-01',
	stockWatchList: [
		'AAPL',
		'AMD',
		'GOOG',
		'INTL',
		'FB',
		'MSFT',
		'TSLA',
		'TWTR',
		'VLO'
	],
	stockData: {
		stocks: [],
		isFetching: false,
		error: null
	},
	specificStockData: {
		stock: {
			symbol: 'AAPL',
			today: 590.09,
			oneDay: 588.09,
			sevenDays: 656.09,
			thirtyDays: 644.09
		},
		isFetching: false,
		error: null
	},
	portfolio: {},
	transactions: [{
		date: '2014-05-01',
		symbol: 'AAPL',
		quantity: 10,
		price: 590.09,
		cost: 5900.90,
		action: 'BUY'
	}],
	balance: 100000,
	alert: {
		status: 'success',
		visible: false
	}
}

const alert = (state = initState.alert, action) => {
	switch(action.type) {
		case Actions.UPDATE_ALERT:
			return action.data
		default:
			return state
	}
}

const date = (state = initState.date, action) => {
	switch(action.type) {
		case Actions.SET_DATE:
			return action.data
		default:
			return state
	}
}

const stockWatchList = (state = initState.stockWatchList, action) => {
	switch(action.type) {
		case Actions.ADD_STOCK_TO_LIST:
			return [...state, action.data];
		default:
			return state;
	}
}

const balance = (state = initState.balance, action) => {
	switch(action.type) {
		case Actions.UPDATE_BALANCE:
			return action.data;
		default:
			return state;
	}
}

const stockData = (state = initState.stockData, action) => {
	switch (action.type) {
		case Actions.GET_STOCKS_SUCCESS:
			return {
				...state,
				stocks: action.data,
				isFetching: false
			};
		case Actions.GET_STOCKS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case Actions.GET_STOCKS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

const specificStockData = (state = initState.specificStockData, action) => {
	switch (action.type) {
		case Actions.GET_STOCK_SUCCESS:
			return {
				...state,
				stock: action.data,
				isFetching: false
			};
		case Actions.GET_STOCK_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case Actions.GET_STOCK_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

const portfolio = (state = initState.portfolio, action) => {
	switch(action.type) {
		case Actions.UPDATE_PORTFOLIO:
			return {
				...state,
				[action.data.symbol]: action.data
			}
		default:
			return state;
	}
}

const transactions = (state = initState.transactions, action) => {
	switch(action.type) {
		case Actions.ADD_TRANSACTION:
			return [...state, action.data];
		default:
			return state;
	}
}

const stockApp = combineReducers({
	date,
	stockWatchList,
	stockData,
	specificStockData,
	transactions,
	balance,
	portfolio,
	alert
});

export default stockApp