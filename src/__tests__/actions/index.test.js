import * as actions from './../../actions/index.js';

describe('Coffee List actions', () => {
	it('deleteSku should create DELETE_SKU action', () => {
		expect(actions.deleteSku(1)).toEqual({
			type: 'DELETE_SKU',
			id: 1
		});
	});

	it('toggleForm should create TOGGLE_FORM action', () => {
		expect(actions.toggleForm()).toEqual({
			type: 'TOGGLE_FORM'
		});
	});

	it('addSku should create ADD_SKU action', () => {
		expect(actions.addSky({
			name: 'Double or Nothing',
			origin: 'Canada Eh',
			roast: 'Medium',
			price: '27.99',
			lbsOnHand: '130',
			id: 1
		})).toEqual({
			type: 'ADD_SKU',
			name: 'Double or Nothing',
			origin: 'Canada Eh',
			roast: 'Medium',
			price: '27.99',
			lbsOnHand: '130',
			id: 1
		});
	});

});



