import React from 'react';

const userOutput = (props) => {
	return(
		<div>
			<p>Hello world!</p>
			<p>My name is {props.userName}</p>
		</div>
	)
};

export default userOutput;