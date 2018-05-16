import React from 'react'

const Card = (props) => {

	const { children, title } = props

	return (
		<div className='card mb-3'>
			<h5 className="card-header default-color white-text">{title}</h5>
			<div className='card-body'>
				{children}
			</div>
		</div>
	)
}

export default Card