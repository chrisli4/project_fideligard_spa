import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import Transactions from '../components/Transactions'

const mapStateToProps = (state) => {
	return {
		balance: state.balance,
		transactions: state.transactions
	}
}

class TransactionsContainer extends Component {

	render() {

		const { transactions } = this.props

		return (
			<Transactions 
				transactions={transactions}
			/>
		)
	}
}

export default withRouter(connect(mapStateToProps)(TransactionsContainer))
