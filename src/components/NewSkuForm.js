import React from "react";
import PropTypes from 'prop-types';
import GeneralForm from './GeneralForm';
import { v4 } from 'uuid';

function NewSkuForm(props) {
	function handleNewSkuFormSubmission(e) {
		e.preventDefault();
		props.onNewSkuCreation({
			name: e.target.name.value,
			origin: e.target.origin.value,
			roast: e.target.roast.value,
			price: e.target.origin.value,
			amount: e.target.amount.value,
			id: v4()
		});
	}

	return (
		<React.Fragment>
			<GeneralForm
				formSubmissionHandler={handleNewSkuFormSubmission}
				buttonText="Add SKU" />
		</React.Fragment>
	);
}

NewSkuForm.propTypes = {
	onNewSkuCreation: PropTypes.func
};

export default NewSkuForm;