	import React, { Component } from 'react'
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockListContainer from '../containers/StockListContainer'
import DatePickerContainer from '../containers/DatePickerContainer'
import TradesContainer from '../containers/TradesContainer'
import PortfolioContainer from '../containers/PortfolioContainer'
import TransactionsContainer from '../containers/TransactionsContainer'
import NavbarContainer from '../containers/NavbarContainer'
import AlertContainer from '../containers/AlertContainer'

class App extends Component {
	render() {
		return (
			<div className='container mt-3'>
			<Router>
				<ScrollToTop>
					<NavbarContainer />
					<div className='row'>
						<div className='col'>
						<StockListContainer />
					</div>
					<div className='col'>
						<DatePickerContainer />
						<AlertContainer />
					<Switch>
						<Route path='/trades' component={TradesContainer} />
						<Route path='/portfolio' component={PortfolioContainer} />
						<Route path='/transactions' component={TransactionsContainer} />
					</Switch>
					</div>
				</div>
				</ScrollToTop>
			</Router>
			</div>
			)

	}
}

export default App;