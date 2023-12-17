import React from "react";
import PropTypes from 'prop-types';

function CoffeeDetail(props) {

	return (
		<React.Fragment>
			<h3> Coffee SKU Information </h3>
			<hr />
			<h4>{coffeeSku.name}</h4>
			<h4>{coffeeSku.origin}</h4>
			<h4>{coffeeSku.roast}</h4>
			<h4>{coffeeSku.price}</h4>
			<h4>{coffeeSku.amount}</h4>
			<button onClick={props.onClickingEdit}>Update Information</button>
		</React.Fragment>
	);
}
CoffeeDetail.propTypes = {
	coffeeSku: PropTypes.object,
	onClickingEdit: PropTypes.func
};

export default CoffeeDetail;