export const deleteSku = id => ({
	type: 'DELETE_SKU',
	id
});

export const toggleForm = () => ({
	type: 'TOGGLE_FORM'
});

export const addSku = (sku) => {
	const { name, origin, roast, price, lbsOnHand, id } = sku;
	return {
		type: 'ADD_SKU',
		name: name,
		origin: origin, 
		roast: roast, 
		price: price, 
		lbsOnHand: lbsOnHand,
		id: id
	}
}
