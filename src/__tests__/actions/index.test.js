import * as actions from './../../actions/index.js';

describe('Coffee List actions', () => {
	it('deleteSku should create DELETE_SKU action', () => {
		expect(actions.deleteSku(1)).toEqual({
			type: 'DELETE_SKU',
			id: 1
		});
	});
});



