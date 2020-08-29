import React, { Component } from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import SetButtons from '../components/SetButtons'
import './App.css';



class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: '',
			sets: '',
			scaled: ''
		}
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then( users => this.setState( { robots: users }))
		
	}

	onCardClicked = e => {
				e.target.animate([
						  // keyframes
						  { transform: 'translateY(0px) rotate(0deg) ' }, 
						  { transform: 'translateY(-300px) rotateY(360deg)' }
						], { 
						  // timing options
						  duration: 3000,
						  iterations: 1
						});
		}
	

	onButtonClicked = e => {
		this.setState({sets: e.target.value})
	}

	render() {
			const { robots,searchfield,sets,scaled} = this.state;

			const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
			const array = ["set_set1","set_set2","set_set3","set_set4","set_set5"];

			return !robots.length ? 
				<h1 className="tc">Loading</h1> :
				(
					<div className="tc"> 
						<h1 className="f1-ns f3">RoboFriends</h1>
						<div className="flex justify-center flex-wrap ">
							<SetButtons clicked={ this.onButtonClicked } setValue={array} />
						</div>
						<SearchBox searchChange={this.onSearchChange} />
						<hr className="b--light-silver " />
						<Scroll>
							<CardList robots={filteredRobots} setCards={sets} setClass={scaled} cardClicked={this.onCardClicked} />
						</Scroll>
					</div>
				)
	}
}

export default App;