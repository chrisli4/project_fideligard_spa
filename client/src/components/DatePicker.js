import React from 'react'
import { Card } from '../elements/'

const DatePicker = (props) => {

	const { min, max, step, dateFormatted, handleChange, handleMouseUp } = props

	return (
		<Card title='Date'>
		<div>
		<label>{dateFormatted}</label>
		<input 
			className="form-control-range"
			type='range'
			min={min}
			max={max}
			step={step}
			onChange={handleChange} 
			onMouseUp={handleMouseUp}
		/>
		</div>
		</Card>
	)
}

export default DatePicker