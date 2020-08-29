import React from 'react';
import SetButton from './setButton'

const SetButtons = ({clicked, setValue} ) => {
	return (
		setValue.map( (set,i) => {
			return (
					<SetButton setValue={set} key={i} clicked={clicked} index ={i +1} />
		)
	})
	)

}

export default SetButtons;