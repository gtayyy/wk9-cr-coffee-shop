
import React from 'react';
import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import InventoryControl from './components/InventoryControl';

function App() {
	return (
		<React.Fragment>
			<Header />
			<Bio />
			<InventoryControl />
		</React.Fragment>
	);
}

export default App;
