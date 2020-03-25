import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class GameList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// ul>li.item$*5
	render() {
		return (
			<div>
				<h1>Game List</h1>

				<Link to="/placeBet">Jets/Patriots</Link>
			</div>
		);
	}
}

export default GameList;
