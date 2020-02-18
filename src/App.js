import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import MouseComponent from './MouseComponent.js'
import EinsteinQuoteComponent from './EinsteinQuoteComponent.js'

class App extends Component {
	render() {
		// your code in the return statement below!learn
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />

			</div>
		);
	}
}

export default App;
