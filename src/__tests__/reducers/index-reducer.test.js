import rootReducer from './../../reducers/index.js';
import { legacy_createStore as createStore } from 'redux';
import formVisibleReducer from './../../reducers/form-visible-reducer.js';
import coffeeListReducer from './../../reducers/coffee-list-reducer.js';

let store = createStore(rootReducer);

describe("rootReducer", () => {

	test('Should return default state if no action type is recognized', () => {
		expect(rootReducer({}, { type: null })).toEqual({
			mainCoffeeList: {},
			formVisibleOnPage: false
		});
	});

	test('Check that initial state of coffeeListReducer matches root reducer', () => {
		expect(store.getState().mainCoffeeList).toEqual(coffeeListReducer(undefined, { type: null }));
	});

	test('Check that initial state of formVisibleReducer matches root reducer', () => {
		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
	});

	test('Check that ADD_SKU action works for coffeeListReducer and root reducer', () => {
		const action = {
			type: 'ADD_SKU',
			name: 'Double or Nothing',
			origin: 'Canada Eh',
			roast: 'Medium',
			price: '27.99',
			lbsOnHand: '130',
			id: 1
		}
		store.dispatch(action);
		expect(store.getState().mainCoffeeList).toEqual(coffeeListReducer(undefined, action));
	});

	test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
		const action = {
			type: 'TOGGLE_FORM'
		}
		store.dispatch(action);
		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
	});
	
});
