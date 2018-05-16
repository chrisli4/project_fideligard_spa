export const SET_DATE = 'SET_DATE';
export const ADD_STOCK_TO_LIST = 'ADD_STOCK_TO_LIST';
export const GET_STOCKS_REQUEST = 'GET_STOCKS_REQUEST';
export const GET_STOCKS_SUCCESS = 'GET_STOCKS_SUCCESS';
export const GET_STOCKS_FAILURE = 'GET_STOCKS_FAILURE';
export const GET_STOCK_REQUEST = 'GET_STOCK_REQUEST';
export const GET_STOCK_SUCCESS = 'GET_STOCK_SUCCESS';
export const GET_STOCK_FAILURE = 'GET_STOCK_FAILURE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO';
export const UPDATE_ALERT = 'UPDATE_ALERT';

export function setDate(data) {
	return {
		type: SET_DATE,
		data
	}
}

export function updateAlert(data) {
	return {
		type: UPDATE_ALERT,
		data
	}
}

export function updateBalance(data) {
	return {
		type: UPDATE_BALANCE,
		data
	}
}

export function addTransaction(data) {
	return {
		type: ADD_TRANSACTION,
		data
	}
}

export function updatePortfolio(data) {
	return {
		type: UPDATE_PORTFOLIO,
		data
	}
}

export function addStockToList(data) {
	return {
		type: ADD_STOCK_TO_LIST,
		data
	}
}

export function getStocksRequest() {
	return {
		type: GET_STOCKS_REQUEST
	}
}

export function getStocksSuccess(data) {
	return {
		type: GET_STOCKS_SUCCESS,
		data
	}
}

export function getStocksFailure(error) {
	return {
		type: GET_STOCKS_FAILURE,
		error
	}
}

export function getStocks(stocks, date) {
	return (dispatch) => {
		dispatch(getStocksRequest())

		fetch(`/api/v1/stocks?symbols=${ stocks.toString() }&end_date=${ date }`)
			.then(response => {
				if(!response.ok)
					throw new Error(`${response.status} ${response.statusText}`)
				return response.json()
			})
			.then(json => {
				dispatch(getStocksSuccess(json))
			})
			.catch(error => {
				dispatch(getStocksFailure(error))
			})
	}
}

export function getStockRequest() {
	return {
		type: GET_STOCK_REQUEST
	}
}

export function getStockSuccess(data) {
	return {
		type: GET_STOCK_SUCCESS,
		data
	}
}

export function getStockFailure(error) {
	return {
		type: GET_STOCK_FAILURE,
		error
	}
}

export function getStock(stock, date) {
	return (dispatch) => {
		dispatch(getStockRequest())

		fetch(`/api/v1/stocks?symbols=${ stock.toString() }&end_date=${ date }`)
			.then(response => {
				if(!response.ok)
					throw new Error(`${response.status} ${response.statusText}`)
				return response.json()
			})
			.then(json => {
				dispatch(getStockSuccess(json[0]))
			})
			.catch(error => {
				dispatch(getStockFailure(error))
			})
	}
}