import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todo-list.component';
import GameList from './components/gameList.component';
import PlaceBet from './components/placeBet.component';

import logo from './logo.jpeg';

class App extends Component {
	state = {
		users: [],
		user: {
			username: 'UserName',
			email: 'email',
			password: 'password'
		}
	};

	componentDidMount() {
		this.getUsers();
	}

	getUsers = (_) => {
		fetch('http://localhost:4000/cappers')
			.then((response) => response.json())
			.then((response) => this.setState({ users: response.data }))
			.catch((err) => console.error(err));
	};

	addUser = (_) => {
		const { user } = this.state;
		fetch(
			`http://localhost:4000/cappers/add?username=${user.username}&email=${user.email}&password=${user.password}`
		)
			.then(this.getUsers)
			.catch((err) => console.error(err));
	};

	renderProduct = ({ username, email, password }) => <div key={email}>{username}</div>;

	render() {
		const { users, user } = this.state;
		return (
			<Router>
				<div className="container">
					<nav className="navBar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="https://google.com" target="_blank" rel="noopener noreferrer">
							<img src={logo} width="30" height="30" alt="Cappers.com" />
						</a>
						<Link to="/" className="navbar-brand">
							MERN-Stack Todo App
						</Link>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="navbar-item">
									<Link to="/" className="nav-link">
										Todos
									</Link>
								</li>

								<li className="navbar-item">
									<Link to="/create" className="nav-link">
										Create Todo
									</Link>
								</li>

								<li className="navbar-item">
									<Link to="/gameList" className="nav-link">
										List of Games
									</Link>
								</li>
							</ul>
						</div>
					</nav>

					{users.map(this.renderProduct)}

					<div>
						<input
							value={user.username}
							onChange={(e) => this.setState({ user: { ...user, username: e.target.value } })}
						/>
						<input
							value={user.email}
							onChange={(e) => this.setState({ user: { ...user, email: e.target.value } })}
						/>
						<input
							value={user.password}
							onChange={(e) => this.setState({ user: { ...user, password: e.target.value } })}
						/>
						<button onClick={this.addUser}>Add User</button>
					</div>

					<Route path="/" exact component={TodosList} />
					<Route path="/edit/:id" component={EditTodo} />
					<Route path="/create" component={CreateTodo} />
					<Route path="/gameList" component={GameList} />
					<Route path="/placeBet" component={PlaceBet} />
				</div>
			</Router>
		);
	}
}

export default App;
