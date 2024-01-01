import React from "react";
import PropTypes from 'prop-types';

function EditForm(props) {
	function handleEditFormSubmission(e) {
		e.preventDefault();
		props.onEditFormCreation({
			name: e.target.name.value,
			origin: e.target.origin.value,
			roast: e.target.roast.value,
			price: e.target.price.value,
			amount: e.target.amount.value,
			id: props.id
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
	onEditFormCreation: PropTypes.func,
	id: PropTypes.string
};

export default EditForm;