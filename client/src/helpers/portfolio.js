import { toNum } from './trade'

const addToPortfolio = (portfolio, stock) => {

	if(portfolio[stock.symbol]) {

		return {
			symbol: stock.symbol,
			quantity: toNum(portfolio[stock.symbol].quantity) + toNum(stock.quantity),
			cost: toNum(portfolio[stock.symbol].cost) + toNum(stock.cost)
		}
	} else {
		return {
			symbol: stock.symbol,
			quantity: toNum(stock.quantity),
			cost: toNum(stock.cost)
		}
	}
}

const removeFromPortfolio = (portfolio, stock) => {

	const symbol = stock.symbol;
	const newQuantity = portfolio[symbol].quantity - stock.quantity;
	const newCost = portfolio[symbol].cost - stock.cost;

	return {
		symbol: symbol,
		quantity: newQuantity,
		cost: newCost
	}
}

const computeCostBasis = (portfolio) => {

	let costBasis = 0;
	for(let stock in portfolio) {
		costBasis += portfolio[stock].cost;
	}

	return costBasis;
}

const computeValue = (portfolio, stockData, time) => {

	let currentValue = 0;
	for(let stock in portfolio) {
		const singleStock = stockData.filter(item => {
			return item.symbol === stock
		})
		let thisValue = toNum(portfolio[stock].quantity) * toNum(singleStock[0][time]);
		currentValue += thisValue;
	}
	return currentValue
}

const toArr = (portfolio) => {

	const arr = [];

	for(let stock in portfolio) {
		arr.push(portfolio[stock])
	}

	return arr;

}

export { toArr, addToPortfolio, removeFromPortfolio, computeCostBasis, computeValue }