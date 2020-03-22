import React, { Component } from 'react';

class PlaceBet extends Component {
	constructor(props) {
		super(props);

		this.onChangeSpread = this.onChangeSpread.bind(this);
		this.onChangeWagerSize = this.onChangeWagerSize.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			wagerSize: '',
			spread: ''
		};
	}

	onChangeWagerSize(e) {
		this.setState({
			wagerSize: e.target.value
		});
	}

	onChangeSpread(e) {
		this.setState({
			spread: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(`Bet Placed: `);

		// Resets boxes to blank
		this.setState({
			wagerSize: '',
			spread: ''
		});
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Bet Placement Page</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Wager Size: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.todo_description}
							onChange={this.onChangeTodoDesc}
						/>
					</div>

					<div className="form-group">
						<label>Spread: </label>
						<input
							type="text"
							className="form-control"
							value={this.state.todo_responsible}
							onChange={this.onChangeTodoResp}
						/>
					</div>

					<div className="form-group">
						<input type="submit" value="Place Bet" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}

export default PlaceBet;
