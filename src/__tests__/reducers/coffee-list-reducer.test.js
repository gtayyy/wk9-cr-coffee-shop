import coffeeListReducer from './../../reducers/coffee-list-reducer.js';

describe('coffeeListReducer', () => {

	let action;
	const skuData = {
		name: 'Double or Nothing',
		origin: 'Canada Eh',
		roast: 'Medium',
		price: '27.99',
		lbsOnHand: '130',
		id: 1
	}

	const currentState = {
		1: {
			name: 'Double or Nothing',
			origin: 'Canada Eh',
			roast: 'Medium',
			price: '27.99',
			lbsOnHand: '130',
			id: 1
		}, 2: {
			name: 'Kilimanjaro',
			origin: 'Tanzania',
			roast: 'Dark',
			price: '22.99',
			lbsOnHand: '130',
			id: 2
		}
	}

	test('Should return default state if there is no action type passed into the reducer', () => {
		expect(coffeeListReducer({}, { type: null })).toEqual({});
	});

	test('Should successfully add a new coffee SKU to mainCoffeeList', () => {
		const { name, origin, roast, price, lbsOnHand, id } = skuData;
		action = {
			type: 'ADD_SKU',
			name: name,
			origin: origin,
			roast: roast,
			price: price,
			lbsOnHand: lbsOnHand,
			id: id
		};
		expect(coffeeListReducer({}, action)).toEqual({
			[id]: {
				name: name,
				origin: origin,
				roast: roast,
				price: price,
				lbsOnHand: lbsOnHand,
				id: id
			}
		});
	});

	test('Should successfully delete a Coffee SKU', () => {
		action = {
			type: 'DELETE_SKU',
			id: 1
		};
		expect(coffeeListReducer(currentState, action)).toEqual({
			2: {
				name: 'Kilimanjaro',
				origin: 'Tanzania',
				roast: 'Dark',
				price: '22.99',
				lbsOnHand: '130',
				id: 2
			}
		});
	});

});
