import React from "react";
import PropTypes from "react";
import GeneralForm from './GeneralForm';

function NewSkuForm(props) {
	function handleNewSkuFormSubmission(e) {
		e.preventDefault();
		props.onNewSkuCreation({
			name: e.target.name.value,
			origin: e.target.origin.value,
			price: e.target.origin.value,
			roast: e.target.roast.value
		});
	}
	return (
		<>
			<GeneralForm
				formSubmissionHandler={handleNewSkuFormSubmission}
				buttonText="Submit" />
		</>
	);
}

NewSkuForm.PropTypes = {
	onNewSkuCreation: PropTypes.func
};

export default NewSkuForm;