import React from "react";
import PropTypes from "prop-types";

function CoffeeSku(props) {
	return (
		<React.Fragment>
			<div onClick={() => props.whenCoffeeSkuClicked(props.id)}>
				<h4>{props.name}</h4>
				<h4>{props.origin}</h4>
				<h4>{props.roast}</h4>
				<h4>{props.price}</h4>
				<h4>{props.amount}</h4>
			</div>
		</React.Fragment>
	);
}

CoffeeSku.propTypes = {
	name: PropTypes.string.isRequired,
	origin: PropTypes.string.isRequired,
	roast: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	amount: PropTypes.number.isRequired,
};

export default CoffeeSku;