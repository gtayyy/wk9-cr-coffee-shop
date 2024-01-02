import React from "react";
import CoffeeSku from "./CoffeeSku";
import PropTypes from 'prop-types';

function CoffeeList(props) {
	return (
		<React.Fragment>
			<hr />
			{Object.values(props.coffeeList).map((sku) =>
				<CoffeeSku
					name={sku.name}
					origin={sku.origin}
					roast={sku.roast}
					price={sku.price}
					amount={sku.amount}
					id={sku.id}
					update={props.handleUpdate}
					addToCart={props.addToCart}
					key={index} />
			)}
		</React.Fragment>
	);
}

CoffeeList.propTypes = {
	skuInStock: PropTypes.object,
	handleEdit: PropTypes.func,
	addToCart: PropTypes.func
};

export default CoffeeList;