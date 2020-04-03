import React, { Component } from 'react';
import './App.scss';
import socketIOClient from "socket.io-client";

class App extends Component {
	constructor() {
		super();
		
    this.state = {
      // socket
    };
	}
	
	componentDidMount() {
		const socket = socketIOClient("http://localhost:3000", {credentials: false})
		socket.on("response", data => console.log("response received"));
		socket.emit("message", "some message")
	}
	
	sendMessage() {
		// const socket = socketIOClient("http://127.0.0.1:3000")
		// socket.emit("message", "some message")
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<button onClick={() => this.sendMessage()}>send message</button>
				</header>
			</div>
		);
	}
}

export default App;
