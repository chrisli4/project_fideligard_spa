import React from 'react'
import OrderStatus from './OrderStatus'
import { Card } from '../elements/'

const Trades = (props) => {

	const { balance, symbol, cost, price, handleSubmit, handleAction, handleQuantity, date, isValid } = props

	let formattedBalance = `$ ${balance}`;

	return (
		<Card title='Trade'>
			<div className='row'>
				<div className='col ml-3'>
					<table className='table table-sm table-borderless'>
						<tbody>
							<tr>
								<td>Symbol:</td>
								<td>{symbol}</td>
							</tr>
							<tr>
								<td>Buy/Sell</td>
								<td>								
									<select className='custom-select form-control-sm' name='action' onChange={e => handleAction(e, symbol, cost)}>
										<option value='BUY'>Buy</option>
										<option value='SELL'>Sell</option>
									</select>
								</td>
							</tr>
							<tr>
								<td>Quantity:</td>
								<td><input type='number' className='form-control form-control-sm' name='quantity' defaultValue={0} onChange={e => handleQuantity(e, symbol, cost)} /></td>
							</tr>
							<tr>
								<td>Date:</td>
								<td>{date}</td>
							</tr>
							<tr>
								<td>Price:</td>
								<td>${price ? price : 0}</td>
							</tr>
							<tr>
								<td>Cost:</td>
								<td>${cost ? cost : 0}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='col mr-3'>
					<table className='table table-sm table-borderless text-center'>
						<tbody>
							<tr className='mx-auto'>
								<td className='mx-auto'>Cash Available:
									<p>{formattedBalance}</p>
								</td>
							</tr>
							<tr>
								<td>Order Status:
									<OrderStatus isValid={isValid} />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className='row'>
				<button type="button" className="btn btn-sm btn-default mx-auto" onClick={e => handleSubmit(symbol, price, cost, date)}>Place Order</button>
			</div>

			</Card>
		)
}

export default Trades