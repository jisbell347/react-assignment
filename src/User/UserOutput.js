import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
	return(
		<div className="UserOutput">
			<p>Hello world!</p>
			<p>My name is {props.userName}</p>
		</div>
	)
};

export default userOutput;