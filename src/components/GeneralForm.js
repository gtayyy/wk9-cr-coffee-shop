import React from "react";
import { ReactPropTypes } from "react";

function GeneralForm(props) {
	return (
		<>
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
					name='price'
					placeholder="$/pound" />
				<input
					type='text'
					name='roast'
					placeholder="Roast" />
				<input
					type='text'
					name='pounds'
					placeholder="Lbs Received" />
				<button type="submit">{props.buttonText}</button>
			</form>
		</>
	);
}

GeneralForm.ReactPropTypes = {
	formSubmissionHandler: ReactPropTypes.function,
	buttonText: ReactPropTypes.string
};

export default GeneralForm;

