import React, { useState } from "react";
import PropTypes from "prop-types";

function CoffeeSku({ name, origin, roast, price, amount, id, update, addToCart }) {
	const [lbsOnHand, setLbsOnHand] = useState(amount);

	const handleAddToCart = () => {
		if (lbsOnHand > 0) {
			setLbsOnHand(s => s - 1);
			addToCart(name, price, id);
		} else {
		}
	};

	const handleEditClick = () => {
		update(id);
	};

	return (
		<div id="coffeeSku">
			<p>{name}</p>
			<p>{origin} - {roast}</p>
			<p>{price} - {lbsOnHand}</p>
			<button onClick={handleAddToCart}>Add to Cart</button>
			<button onClick={handleEditClick}>Update SKU</button>
		</div>
	);
}

CoffeeSku.propTypes = {
	name: PropTypes.string.isRequired,
	origin: PropTypes.string.isRequired,
	roast: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	update: PropTypes.func.isRequired,
	addToCart: PropTypes.func.isRequired,
};

export default CoffeeSku;




// function CoffeeSku(props) {
// 	return (
// 		<React.Fragment>
// 			<div onClick={() => props.whenCoffeeSkuClicked(props.id)}>
// 				<h4>{props.name}</h4>
// 				<h4>{props.origin}</h4>
// 				<h4>{props.roast}</h4>
// 				<h4>{props.price}</h4>
// 				<h4>{props.amount}</h4>
// 			</div>
// 		</React.Fragment>
// 	);
// }

// CoffeeSku.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	origin: PropTypes.string.isRequired,
// 	roast: PropTypes.string.isRequired,
// 	price: PropTypes.number.isRequired,
// 	amount: PropTypes.number.isRequired,
// };

// export default CoffeeSku;