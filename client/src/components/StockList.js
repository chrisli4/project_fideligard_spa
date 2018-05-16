import React from 'react'
import { Link } from "react-router-dom";
import { Card, Table, Td } from '../elements/'
import { delta } from '../helpers/stock'

const StockList = (props) => {

	const { stocks, handleTrade } = props

	return (
		<Card title='Stocks'>
			<Table>
			<thead>
				<tr>
					<th>Symbol</th>
					<th>Today</th>
					<th>1d</th>
					<th>7d</th>
					<th>30d</th>
					<th>Trade ? </th>
				</tr>
			</thead>
			<tbody>
				{stocks.map(stock => (
					 <tr key={stock.symbol}>
					 	<Td>{stock.symbol}</Td>
					 	<Td>${stock.today}</Td>
					 	<Td>{delta(stock.today, stock.oneDay)}</Td>
					 	<Td>{delta(stock.today, stock.sevenDays)}</Td>
					 	<Td>{delta(stock.today, stock.thirtyDays)}</Td>
						<Td>
							<Link to='/trades' onClick={e => handleTrade(stock.symbol)}>
								<button type="button" className="btn btn-sm btn-default">Trade</button>
							</Link>
						</Td>
					 </tr>
					))
				}
			</tbody>
		</Table>
		</Card>
		)
}

export default StockList