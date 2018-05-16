import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStock, getStocks, setDate } from '../actions'
import DatePicker from '../components/DatePicker'
import { unixToString, unixToFormatted } from '../helpers/date'

const MIN_UNIX_DATE = '1393632000';
const MAX_UNIX_DATE = '1519776000';
const ONE_DAY_SECS = '86400'; 

const mapStateToProps = (state, ownProps) => {
	return {
		date: state.date,
		stockWatchList: state.stockWatchList,
		specificStock: state.specificStockData.stock
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateStock: (stock, date) => {
			dispatch(getStock(stock, date))
		},
		updateStocks: (stocks, date) => {
			dispatch(getStocks(stocks, date))
		},
		setDate: (date) => {
			dispatch(setDate(date))
		}
	}
}

class DatePickerContainer extends Component {

	constructor(){
		super()
		this.state = {
			dateUnix: unixToString(MIN_UNIX_DATE),
			dateFormatted: unixToFormatted(MIN_UNIX_DATE)
		}
	}

	handleChange = (e) => {
		e.preventDefault()

		let unixInput = e.target.value

		this.setState({
			dateUnix: unixToString(unixInput),
			dateFormatted: unixToFormatted(unixInput)
		})
	}

	handleMouseUp = (e) => {
		e.preventDefault()

		let unixInput = e.target.value
		let date = unixToString(unixInput)

		this.props.setDate(date);
		this.props.updateStocks(this.props.stockWatchList, date);
		this.props.updateStock(this.props.specificStock.symbol, date);
	}


	render() {

		return (
			<DatePicker min={MIN_UNIX_DATE} 
						max={MAX_UNIX_DATE}
						step={ONE_DAY_SECS}
						dateFormatted={this.state.dateFormatted}
						handleChange={this.handleChange} 
						handleMouseUp={this.handleMouseUp}
						{...this.props} 
			/>
		)
	}


}

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerContainer)