import React from 'react';
import './buttonStyle.css';

const SetButton = ( { clicked , setValue , index } ) => {
	
	return (
		<React.Fragment>	
			<button onClick={clicked} value={setValue} className="buttonStyle">Robots Set { index } </button>
		</React.Fragment>
		)
}

export default SetButton;