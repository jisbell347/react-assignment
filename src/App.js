import React, {Component} from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
	state = {
		username: 'John'
	};

	switchNameHandler = (event) => {
		this.setState({
			username: event.target.value
		})
	};



	render() {
		const style = {
			color: '#eee',
			backgroundColor: 'black'
		};
		return (
			<div className="App">
				<h1 style={style}>Welcome to React!</h1>
				<UserInput userName={this.state.username} changed={this.switchNameHandler}/>
				<UserOutput userName={this.state.username}/>
			</div>
		);
	}
}

export default App;
