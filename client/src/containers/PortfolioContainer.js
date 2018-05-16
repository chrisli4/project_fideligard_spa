import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import Portfolio from '../components/Portfolio'
import { delta } from '../helpers/stock'
import { computeCostBasis, computeValue, toArr } from '../helpers/portfolio'

const mapStateToProps = (state) => {
	return {
		balance: state.balance,
		portfolio: state.portfolio,
		stocks: state.stockData.stocks
	}
}

class PortfolioContainer extends Component {

	render() {

		const { balance, stocks, portfolio } = this.props
		const costBasis = computeCostBasis(portfolio); 
		const currentValue = computeValue(portfolio, stocks, 'today');
		const diff = delta(currentValue, costBasis);

		return (
			<Portfolio 
				portfolio={toArr(portfolio)}
				balance={balance} 
				costBasis={costBasis}
				currentValue={currentValue}
				diff={diff}
			/>
		)
	}
}

export default withRouter(connect(mapStateToProps)(PortfolioContainer))
