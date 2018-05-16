import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import Trades from '../components/Trades'
import { toNum, toFloat, computeCost, buyBalance, sellBalance, verifyBuy, verifySell } from '../helpers/trade'
import { addToPortfolio, removeFromPortfolio } from '../helpers/portfolio'
import { updatePortfolio, addTransaction, updateBalance, updateAlert } from '../actions'

const mapStateToProps = (state) => {
	return {
		date: state.date,
		specificStock: state.specificStockData.stock,
		balance: state.balance,
		portfolio: state.portfolio
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updatePortfolio: (position) => {
			dispatch(updatePortfolio(position))
		},
		addTransaction: (transaction) => {
			dispatch(addTransaction(transaction))
		},
		updateBalance: (balance) => {
			dispatch(updateBalance(balance))
		},
		updateAlert: (status) => {
			dispatch(updateAlert(status))
		},
	}
}


class TradesContainer extends Component {

	constructor() {
		super()
		this.state = {
			quantity: 0,
			cost: 0,
			isValid: true,
			action: 'BUY',
		}
	}

	handleAction = (e) => {
		e.preventDefault();

		let action = e.target.value;

		if(action === 'BUY') {
			this.setState({
				action: action,
				isValid: verifyBuy(this.props.balance, this.state.cost)
			})
		}

		if(action === 'SELL') {
			this.setState({
				action: action,
				isValid: verifySell(this.props.portfolio, this.props.specificStock.symbol, this.state.quantity)
			})
		}
	}

	handleQuantity = (e) => {
		e.preventDefault()

		let price = toFloat(this.props.specificStock.today);
		let quantity = toNum(e.target.value);
		let cost = price * quantity;

		if(this.state.action === 'BUY') {
			this.setState({
				quantity: quantity,
				isValid: verifyBuy(this.props.balance, cost)
			})
		}

		if(this.state.action === 'SELL') {
			this.setState({
				quantity: quantity,
				isValid: verifySell(this.props.portfolio, this.props.specificStock.symbol, quantity)
			})
		}
	}

	handleSubmit = (symbol, price, cost, date) => {

		const quantity = toNum(this.state.quantity)
		const action = this.state.action;
		const floatPrice = toFloat(price);
		const floatCost = toFloat(cost);

		const newEntry = {
			symbol: symbol,
			price: floatPrice,
			quantity: quantity,
			cost: floatCost,
			action: action,
			date: date
		}
	
	if(action === 'BUY') {

		if(verifyBuy(this.props.balance, cost)) {
			const newBalance = buyBalance(this.props.balance, cost);
			const toAdd = addToPortfolio(this.props.portfolio, newEntry);

			this.props.addTransaction(newEntry);
			this.props.updateBalance(newBalance);
			this.props.updatePortfolio(toAdd);
			this.props.updateAlert({
				status: 'success',
				visible: true
			});

		} else {
			this.props.updateAlert({
				status: 'buyFail',
				visible: true
			});
		}
	}

	if(action === 'SELL') {
		if(verifySell(this.props.portfolio, symbol, quantity)) {
			const newBalance = sellBalance(this.props.balance, cost);
			const toRemove = removeFromPortfolio(this.props.portfolio, newEntry);

			this.props.addTransaction(newEntry);
			this.props.updateBalance(newBalance);
			this.props.updatePortfolio(toRemove);
			this.props.updateAlert({
				status: 'success',
				visible: true
			});
		}

		else
			this.props.updateAlert({
				status: 'sellFail',
				visible: true
			});
	}
}

	render() {

		const { specificStock, date, balance } = this.props

		let price = specificStock.today
		let quantity = this.state.quantity

		let cost = computeCost(price, quantity)

		return (
			<Trades 
				handleQuantity={this.handleQuantity}
				handleSubmit={this.handleSubmit}
				handleAction={this.handleAction}
				isValid={this.state.isValid}
				symbol={specificStock.symbol}
				price={price}
				quantity={quantity}
				balance={balance}
				cost={cost}
				date={date}
			/>
		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TradesContainer))