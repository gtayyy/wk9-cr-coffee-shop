import React from "react";
import PropTypes from 'prop-types';

function GeneralForm(props) {
	return (
		<React.Fragment>
			<form onSubmit={props.formSubmissionHandler}>
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
					type='number'
					name='price'
					placeholder="$/pound" />
				<input
					type='number'
					name='pounds'
					placeholder="Lbs Received" />
				<button type="submit">{props.buttonText}</button>
			</form>
		</React.Fragment>
	);
}

GeneralForm.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
};

export default GeneralForm;

