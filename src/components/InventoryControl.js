import React from "react";
import NewSkuForm from "./NewSkuForm";
import CoffeeList from "./CoffeeList";
import EditForm from "./EditForm";
import { v4 } from 'uuid';
import Cart from "./Cart"; 
import './../CSS/InventoryControl.css';

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
					amount: '15',
					price: '$27.99/lb',
					id: v4()
				},
				{
					name: 'Afternoon Delight',
					origin: 'Somewhere sunny',
					roast: 'Medium Roast',
					amount: '52',
					price: '$22.99/lb',
					id: v4()
				},
				{
					name: 'Workin Overtime',
					origin: 'The back alley',
					roast: 'Dark Roast',
					amount: '36',
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

	handleUpdatingCoffeeList = (updatedList) => {
		const updatedCoffeeList = this.state.mainCoffeeList.map(sku => {
			if (sku.id === this.state.selectedId) {
				return {
					...sku,
					name: updatedList.name,
					origin: updatedList.origin,
					roast: updatedList.roast,
					price: updatedList.price,
					amount: updatedList.amount
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
				currentlyVisibleState = <EditForm onEditFormCreation={this.handleUpdatingCoffeeList}
				id={this.state.selectedId} />; 
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
							skuInStock={this.state.mainCoffeeList}
						/>
						{/* <div className="centerButtons">
							<button onClick={this.handleAddClick}>{buttonText}</button>
							<button onClick={this.handleCartClick}>{cartButtonText}</button>
						</div> */}
					</React.Fragment>)
			}

		return (
			<React.Fragment>
				{currentlyVisibleState}
				<div className="rightAlignButtons">
					<button className="buttonStyle" onClick={this.handleAddClick}>{buttonText}</button>
					<button className="buttonStyle" onClick={this.handleCartClick}>{cartButtonText}</button>
				</div>
			</React.Fragment>
		);
	}

}

	export default InventoryControl;