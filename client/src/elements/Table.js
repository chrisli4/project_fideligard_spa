import React from 'react'

const Table = (props) => {

	const { children, className } = props

	const classNames = `table text-center align-middle ${ className ? className : '' }`

	return (
		<table className={classNames}>
			{children}
		</table>
	)
}

export default Table