import React from 'react'
import { Card, Td } from '../elements/'

const Transactions = (props) => {

	const { transactions } = props

	return (
		<Card title='Transactions'>
		<table className='table'>
			<thead>
				<tr>
					<th>Date</th>
					<th>Symbol</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Cost</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
			{transactions.map((transaction, index) => {
				return (
					<tr key={index}>
						<Td>{transaction.date}</Td>
						<Td>{transaction.symbol}</Td>
						<Td>${transaction.price}</Td>
						<Td>{transaction.quantity}</Td>
						<Td>${transaction.cost}</Td>
						<Td>{transaction.action}</Td>
					</tr>
				)
			})}
		</tbody>
		</table>
		</Card>
	)

}

export default Transactions