import formVisibleReducer from './../../reducers/form-visible-reducer.js';

describe("formVisibleReducer", () => {

	test('Should return default state if no action type is recognized', () => {
		expect(formVisibleReducer(false, { type: null })).toEqual(false);
	});
});