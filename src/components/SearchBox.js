import React from 'react';



const SearchBox = ({searchChange}) => {
	return (
		<div className="pa1 tc ">
			<input 
				className="search-box pa3-ns pa1 ba b--green bg-lightest-blue"
				type="serach" 
				placeholder="Search Robots" 
				onChange={searchChange}
			/>
		</div>
		)
}

export default SearchBox;