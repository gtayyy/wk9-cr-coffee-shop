import React from "react";
// import GeneralForm from './GeneralForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function EditForm(props) {
	function handleEditFormSubmission(e) {
		e.preventDefault();
		props.onEditFormCreation({
			name: e.target.name.value,
			origin: e.target.origin.value,
			roast: e.target.roast.value,
			price: e.target.price.value,
			pounds: e.target.pounds.value,
			id: v4()
		});
	}
	return (
		<React.Fragment>
			<form onSubmit={handleEditFormSubmission}>
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
					placeholder="Lbs in stock" />
				<button type='submit'>Update SKU</button>
			</form>
		</React.Fragment>
	);
}

EditForm.propTypes = {
	onEditFormCreation: PropTypes.func
};

export default EditForm;






// function EditForm (props) {
// 	const { coffeeSku } = props;

// 	function handleEditFormSubmission(e) {
// 		e.preventDefault();
// 		props.onEditCoffee({ name: e.target.name.value, origin: e.target.origin.value, price: e.target.price.value, roast: e.target.roast.value, pounds: e.target.pounds.value });
// 	}

// 	return (
// 		<React.Fragment>
// 			<GeneralForm
// 				formSubmissionHandler={handleEditFormSubmission}
// 				buttonText="Update SKU Details" />
// 		</React.Fragment>
// 	);
// }

// EditForm.propTypes = {
// 	coffeeSku: PropTypes.object,
// 	onEditCoffee: PropTypes.func
// };

// export default EditForm;