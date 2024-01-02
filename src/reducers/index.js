import formVisibleReducer from './form-visible-reducer.js';
import coffeeListReducer from './coffee-list-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	formVisibleOnPage: formVisibleReducer,
	mainCoffeeList: coffeeListReducer
});

export default rootReducer;
