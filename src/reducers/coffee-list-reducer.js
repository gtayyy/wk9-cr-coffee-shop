import { v4 } from 'uuid';

const mainCoffeeList = {
	[v4()]: {
		name: 'Morning Side',
		origin: 'So Far',
		roast: 'Dark Roast',
		price: '$27.99/lb',
		amount: '130',
		id: v4(),
	}, [v4()]: {
		name: 'Afternoon Delight',
		origin: '60% Unsure',
		roast: 'Medium Roast',
		price: '$22.99/lb',
		amount: '130',
		id: v4(),
	}, [v4()]: {
		name: 'Aint Going Down Till the Sun Comes Up',
		origin: 'Back Alley',
		roast: 'Just... Roasted',
		price: '$9.99/lb',
		amount: '130',
		id: v4(),
	}
}

const reducer = (state = { mainCoffeeList }, action) => {
	const { name, origin, roast, price, amount, id } = action;
	switch (action.type) {
		case 'ADD_UPDATED_SKU':
			return Object.assign({}, state, {
				[id]: {
					name: name,
					origin: origin,
					roast: roast,
					price: price,
					amount: amount,
					id: id
				}
			});
		default:
			return state;
	}
};

export default reducer;