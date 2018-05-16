import React from 'react'
import { Card, Td } from '../elements/'

const Portfolio = (props) => {

	const { portfolio, balance, costBasis, currentValue, diff } = props

	let costBasisFormat = `$${ costBasis }`
	let currentValueFormat = `$${ currentValue }`

	return (
		<Card title='Portfolio'>
		<table className='table'>
			<thead>
				<tr>
					<th>Balance</th>
					<th>Cost Basis</th>
					<th>Current Value</th>
					<th>Profit/Loss</th>

				</tr>
			</thead>
			<tbody>
				<tr>
					<td>${balance}</td>
					<td>{costBasis ? costBasisFormat : 'N/A'}</td>
					<td>{currentValue ? currentValueFormat : 'N/A'}</td>
					<td>{diff ? diff : 'N/A'}</td>
				</tr>
			</tbody>
		</table>

		<table className='table'>
			<thead>
				<tr>
					<th>Symbol</th>
					<th>Quantity</th>
				</tr>
			</thead>
			<tbody>
					{portfolio.map((stock, index) => {
						return (
							<tr key={index}>
								<Td>{stock.symbol}</Td>
								<Td>{stock.quantity}</Td>
							</tr>
						)
					})}
			</tbody>
		</table>

		</Card>
	)
}

export default Portfolio