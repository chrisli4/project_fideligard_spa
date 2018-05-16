import React from 'react'

const OrderStatus = (props) => {

	const { isValid } = props

	if(isValid) {
		return (
			<p className='text-success'>Valid</p>
		)
	}
	return (
		<p className='text-danger'>Invalid</p>
	)
}

export default OrderStatus