import React from 'react'

const Td = (props) => {

	const { children } = props;

	return (
		<td className='align-middle'>
			{children}
		</td>
	)
}

export default Td