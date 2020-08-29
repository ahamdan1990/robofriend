import React from 'react';
import './card.css'

function Card({ name,email ,id,setCards,cardClicked }) {

	return (
			<div className={ "card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"}  onClick={cardClicked}>
				<img src={`https://robohash.org/${setCards}/${ id }?size=200x200`} alt="Robot"/>
				<div>
					<h2>{ name }</h2>
					<p>{ email }</p>
				</div>
			</div>
		)
}

export default Card;