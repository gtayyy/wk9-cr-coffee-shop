import React from "react";
import { ReactPropTypes } from "react";


function EditForm (props) {
	const { coffee } = props;

	function handleEditFormSubmission(e) {
		e.preventDefault();
		props.onEditCoffee({ name: e.target.name.value, origin: e.target.origin.value, price: e.target.price.value, roast: e.target.roast.value, pounds: e.target.pounds.value });
	}

	return (
		<>
			<GeneralForm
				formSubmissionHandler={handleEditFormSubmission}
				buttonText="Update SKU Details" />
		</>
	);
}

EditForm.ReactPropTypes = {
	coffee: <ReactPropTypes className="object"></ReactPropTypes>,
	onEditCoffee: <ReactPropTypes className="function"></ReactPropTypes>
};

export default EditForm;