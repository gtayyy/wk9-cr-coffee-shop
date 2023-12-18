import React from "react";
import CoffeeSku from "./CoffeeSku";
import PropTypes from 'prop-types';

function CoffeeList(props) {
	return (
		<React.Fragment>
			<hr />
			{props.skuInStock.map((sku, index) =>
				<CoffeeSku
					name={sku.name}
					origin={sku.origin}
					roast={sku.roast}
					price={sku.price}
					amount={sku.amount}
					id={sku.id}
					update={props.handleEdit}
					addToCart={props.addToCart}
					key={index} />
			)}
		</React.Fragment>
	);
}

CoffeeList.propTypes = {
	coffeeList: PropTypes.array
};

export default CoffeeList;




// function CoffeeList(props) {
// 	return (
// 		<React.Fragment>
// 			{props.coffeeList.map((coffeeSku) =>
// 				<CoffeeSku
// 					whenCoffeeSkuClicked={ props.onCoffeeSkuSelection }
// 					name={coffeeSku.name}
// 					origin={coffeeSku.origin}
// 					price={coffeeSku.price}
// 					roast={coffeeSku.roast}
// 					amount={coffeeSku.amount}
// 					id={coffeeSku.id}
// 					key={coffeeSku.id} />
// 					)}
// 		</React.Fragment>
// 	);
// }

// CoffeeList.propTypes = {
// 	coffeeList: PropTypes.array,
// 	onCoffeeSkuSelection: PropTypes.func
// };

// export default CoffeeList;