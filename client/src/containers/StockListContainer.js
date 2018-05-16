import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStock, getStocks } from '../actions'
import StockList from '../components/StockList'

const mapStateToProps = (state, ownProps) => {
	return {
		stockWatchList: state.stockWatchList,
		stockData: state.stockData,
		date: state.date,
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		getStock: (stock, date) => {
			dispatch(getStock(stock, date))
		},
		getStocks: (stocks, date) => {
			dispatch(getStocks(stocks, date))
		}
	}
}

class StockListContainer extends Component {

	componentDidMount() {
		this.props.getStocks(this.props.stockWatchList, this.props.date)
	}

	handleTrade = (symbol) => {
		this.props.getStock(symbol, this.props.date)
	}

	render() {
		return <StockList 
					stocks={this.props.stockData.stocks} 
					handleTrade={this.handleTrade}
				/>
	}
}

export default connect(
	mapStateToProps,
	mapDispatchtoProps
)(StockListContainer)
