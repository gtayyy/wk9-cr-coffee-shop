import React from "react";
import CoffeeSku from "./CoffeeSku";
import PropTypes from 'prop-types';

function CoffeeList(props) {
	return (
		<React.Fragment>
			{props.coffeeList.map((coffeeSku) =>
				<CoffeeSku
					whenCoffeeSkuClicked={ props.onCoffeeSkuSelection }
					name={coffeeSku.name}
					origin={coffeeSku.origin}
					price={coffeeSku.price}
					roast={coffeeSku.roast}
					amount={coffeeSku.amount}
					id={coffeeSku.id}
					key={coffeeSku.id} />
					)}
		</React.Fragment>
	);
}

CoffeeList.propTypes = {
	coffeeList: PropTypes.array,
	onCoffeeSkuSelection: PropTypes.func
};

export default CoffeeList;