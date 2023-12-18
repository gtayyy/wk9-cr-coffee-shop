
import React from 'react';
import './App.css';
import Header from './Header';
import Bio from './Bio';
import InventoryControl from './InventoryControl';

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
