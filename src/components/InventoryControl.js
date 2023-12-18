import React from "react";
import NewSkuForm from "./NewSkuForm";
import CoffeeList from "./CoffeeList";
import EditForm from "./EditForm";
import { v4 } from 'uuid';
import Cart from "./Cart"; 

class InventoryControl extends React.Component {

	constructor(props) {
		super(props);
		this.addToCart = this.addToCart.bind(this);
		this.state = {
			addFormVisibleOnPage: false,
			updateFormVisibleOnPage: false,
			cartVisibleOnPage: false,
			selectedId: null,
			mainCoffeeList: [
				{
					name: 'Morning Side',
					origin: 'Far faaaar away',
					roast: 'Dark Roast',
					price: '$27.99/lb',
					id: v4()
				},
				{
					name: 'Afternoon Delight',
					origin: 'Somewhere sunny',
					roast: 'Medium Roast',
					price: '$22.99/lb',
					id: v4()
				},
				{
					name: 'Workin Overtime',
					origin: 'The back alley',
					roast: 'Dark Roast',
					price: '$11.99/lb',
					id: v4()
				}
			],
			cartItems: []
		};
	}

	handleAddClick = () => {
		if (this.state.updateFormVisibleOnPage === false) {
			this.setState(prevState => ({ addFormVisibleOnPage: !prevState.addFormVisibleOnPage }));
		} else {
			this.setState(prevState => ({ updateFormVisibleOnPage: !prevState.updateFormVisibleOnPage }));
		}
	}

	handleCartClick = () => {
		this.setState(prevState => ({ cartVisibleOnPage: !prevState.cartVisibleOnPage }));
	}

	handleUpdateClick = (id) => {
		this.setState(prevState => ({
			updateFormVisibleOnPage: !prevState.updateFormVisibleOnPage,
			selectedId: id
		}));
	};

	handleAddingNewSkuToList = (newSku) => {
		const newMainCoffeeList = this.state.mainCoffeeList.concat(newSku);
		this.setState({
			mainCoffeeList: newMainCoffeeList,
			addFormVisibleOnPage: false
		});
	};

	handleUpdatingCoffeeList = (updatedCoffeeList) => {
		const updatedCoffeeList = this.state.mainCoffeeList.map(sku => {
			if (sku.id === this.state.selectedId) {
				return {
					...item,
					name: updatedCoffeeList.name,
					origin: updatedCoffeeList.origin,
					roast: updatedCoffeeList.roast,
					price: updatedCoffeeList.price,
					amount: updatedCoffeeList.amount
				};
			}
			return sku;
		});

		this.setState({
			mainCoffeeList: updatedCoffeeList,
			updateFormVisibleOnPage: false
		});
	};

	addToCart = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice, id: v4() };
    console.log(newItem);
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, newItem]
    }));
  };

	removeFromCart = (itemId) => {
		const updatedCart = this.state.cartItems.filter((item) => item.id !== itemId);
		console.log(updatedCart);
		this.setState({ cartItems: updatedCart });
	};

		render() {
			let currentlyVisibleState = null;
			let buttonText = null;
			let cartButtonText = null;
			if (this.state.addFormVisibleOnPage) {
				currentlyVisibleState = <NewSkuForm onNewSkuCreation={this.handleAddingNewSkuToList} />;
				buttonText = "Return to Coffee Menu";
			} else if (this.state.updateFormVisibleOnPage) {
				currentlyVisibleState = <EditForm onEditFormCreation={this.handleUpdatingCoffeeList} />;
				buttonText = "Return to Coffee Menu";
			} else if (this.state.cartVisibleOnPage) {
				cartButtonText = "Return to Coffee Menu"
				currentlyVisibleState = (
					<React.Fragment>
						<Cart
							cartItems={this.state.cartItems}
							removeFromCart={this.removeFromCart}
						/>
						<button onClick={this.handleCartClick} > {cartButtonText}</button>
					</React.Fragment>)
			} else {
				buttonText = "Add New SKU";
				cartButtonText = "View Cart"
				currentlyVisibleState = (
					<React.Fragment>
						<CoffeeList
							addToCart={this.addToCart}
							handleUpdate={this.handleUpdateClick}
							coffeeInStock={this.state.mainCoffeeList}
						/>
						<div className="centerButtons">
							<button onClick={this.handleAddClick}>{buttonText}</button>
							<button onClick={this.handleCartClick}>{cartButtonText}</button>
						</div>
					</React.Fragment>)
			}

			return (
				<React.Fragment>
					{currentlyVisibleState}
				</React.Fragment>
			);
		}

	}

	export default InventoryControl;
	





// 		this.state = {
// 			formVisibleOnPage: false,
// 			mainCoffeeList: [],
// 			selectedCoffee: null,
// 			editing: false
// 		};
// 	}
// 	handleClick = () => {
// 		if (this.state.selectedCoffee != null) {
// 			this.setState({
// 				formVisibleOnPage: false,
// 				selectedCoffee: null,
// 				editing: false
// 			});
// 		} else {
// 			this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
// 		}
// 	}
// 	handleAddingNewSkuToList = (newSku) => {
// 		const newMainCoffeeList = this.state.mainCoffeeList.concat(newSku);
// 		this.setState({
// 			mainCoffeeList: newMainCoffeeList,
// 			formVisibleOnPage: false
// 		});
// 	}
// 	handleChangingSelectedCoffee = (id) => {
// 		const selectedCoffee = this.state.mainCoffeeList.filter(coffeeSku => coffeeSku.id === id)[0];
// 		this.setState({ selectedCoffee: selectedCoffee });
// 	}
// 	handleEditClick = () => {
// 		this.setState({ editing: true });
// 	}
// 	handleEditingSkuInList = (skuToEdit) => {
// 		const editedMainCoffeeList = this.state.mainCoffeeList
// 		.filter(coffeeSku => coffeeSku.id !== this.state.selectedCoffee.id)
// 		.concat(skuToEdit);
// 		this.setState({
// 			mainCoffeeList: editedMainCoffeeList,
// 			editing: false,
// 			selectedCoffee: null
// 		});
// 	}
// 	render() {
// 		let currentVisibleState = null;
// 		let buttonText = null;

// 		if (this.state.editing) {
// 			currentVisibleState = <EditForm coffeeSku={this.state.selectedCoffee} onEditCoffee={this.handleEditingSkuInList} />
// 			buttonText = "Return to Coffee List";
// 		} else if (this.state.formVisibleOnPage) {
// 			currentVisibleState = <NewSkuForm onNewSkuCreation={this.handleAddingNewSkuToList} />
// 			buttonText = "Return to Coffee List";
// 		} else {
// 			currentVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSkuSelection={this.handleChangingSelectedCoffee} />
// 			buttonText = "Add SKU";
// 		}

// 		return (
// 			<React.Fragment>
// 				{currentVisibleState}
// 				<button onClick={this.handleClick}>{buttonText}</button>
// 			</React.Fragment>
// 		);
// 	}
// }

// export default InventoryControl;