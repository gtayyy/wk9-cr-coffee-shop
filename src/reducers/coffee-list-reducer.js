const reducer = (state = {}, action) => {
	const { name, origin, roast, price, lbsOnHand, id } = action;
	switch (action.type) {
		case 'ADD_SKU':
			return Object.assign({}, state, {
				[id]: {
					name: name,
					origin: origin,
					roast: roast,
					price: price,
					lbsOnHand: lbsOnHand,
					id: id
				}
			});
		case "DELETE_SKU":
			let newState = { ...state };
			delete newState[id];
			return newState;
		default:
			return state;
	}
};

export default reducer;	