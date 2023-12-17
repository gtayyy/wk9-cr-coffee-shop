import React from "react";
import GeneralForm from './GeneralForm';
import PropTypes from 'prop-types';

function EditForm (props) {
	const { coffeeSku } = props;

	function handleEditFormSubmission(e) {
		e.preventDefault();
		props.onEditCoffee({ name: e.target.name.value, origin: e.target.origin.value, price: e.target.price.value, roast: e.target.roast.value, pounds: e.target.pounds.value });
	}

	return (
		<React.Fragment>
			<GeneralForm
				formSubmissionHandler={handleEditFormSubmission}
				buttonText="Update SKU Details" />
		</React.Fragment>
	);
}

EditForm.propTypes = {
	coffeeSku: PropTypes.object,
	onEditCoffee: PropTypes.func
};

export default EditForm;