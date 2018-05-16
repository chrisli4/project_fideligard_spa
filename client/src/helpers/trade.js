const toNum = (str) => {
	return parseInt(str, 10);
}

const toFloat = (str) => {
	return parseFloat(str);
}

const computeCost = (quantity, price) => {
	return (toNum(quantity) * toNum(price)).toFixed(2)
}

const verifyBuy = (balance, cost) => {
	return buyBalance(balance, cost) >= 0;
}

const verifySell = (portfolio, symbol, quantity) => {
	if(portfolio[symbol]) {
		return portfolio[symbol].quantity >= quantity;
	} else 
		return false;
}


const buyBalance = (balance, cost) => {
	return (toNum(balance) - toNum(cost)).toFixed(2);
}

const sellBalance = (balance, cost) => {
	return (toNum(balance) + toNum(cost)).toFixed(2);
}

export { toFloat, toNum, computeCost, buyBalance, sellBalance, verifyBuy, verifySell }