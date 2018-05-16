import React from 'react';
import { Alert } from 'reactstrap';

const CustomAlert = (props) => {

	const { onDismiss, visible, color, text } = props;

	return (
		<Alert className='text-center' color={color} isOpen={visible} toggle={onDismiss}>
        	{ text }
      	</Alert>
	)
}

export default CustomAlert