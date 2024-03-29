import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
// import reducer from './reducers/coffee-list-reducer.js';
import rootReducer from './reducers/index.js';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

store.subscribe(() =>
	console.log(store.getState())
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

