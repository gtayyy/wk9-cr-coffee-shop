import React from "react";
import PropTypes from 'prop-types';
// import GeneralForm from './GeneralForm';
import { v4 } from 'uuid';

function NewSkuForm(props) {
	function handleNewSkuFormSubmission(e) {
		e.preventDefault();
		props.onNewSkuCreation({
			name: e.target.name.value,
			origin: e.target.origin.value,
			roast: e.target.roast.value,
			price: e.target.price.value,
			amount: e.target.amount.value,
			id: v4()
		});
	}

	return (
		<React.Fragment>
			<form onSubmit={handleNewSkuFormSubmission}>
				<input
					type='text'
					name='name'
					placeholder="Coffee Name" />
				<input
					type='text'
					name='origin'
					placeholder="Origin" />
				<input
					type='text'
					name='roast'
					placeholder="Roast" />
				<input
					type='text'
					name='price'
					placeholder="$ / Lb" />
				<input
					type='text'
					name='amount'
					placeholder="Lbs Received" />
				<button type='submit'>Add New Inventory</button>
			</form>
		</React.Fragment>
	);
}

NewSkuForm.propTypes = {
	onNewSkuCreation: PropTypes.func
};

// 	return (
// 		<React.Fragment>
// 			<GeneralForm
// 				formSubmissionHandler={handleNewSkuFormSubmission}
// 				buttonText="Add SKU" />
// 		</React.Fragment>
// 	);
// }

export default NewSkuForm;