import React from "react";
import NewSkuForm from "./NewSkuForm";
import CoffeeList from "./CoffeeList";
import EditForm from "./EditForm";

class InventoryControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			mainCoffeeList: [],
			selectedCoffee: null,
			editing: false
		};
	}
	handleClick = () => {
		if (this.state.selectedCoffee != null) {
			this.setState({
				formVisibleOnPage: false,
				selectedCoffee: null,
				editing: false
			});
		} else {
			this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
		}
	}
	handleAddingNewSkuToList = (newSku) => {
		const newMainCoffeeList = this.state.mainCoffeeList.concat(newSku);
		this.setState({
			mainCoffeeList: newMainCoffeeList,
			formVisibleOnPage: false
		});
	}
	handleChangingSelectedCoffee = (id) => {
		const selectedCoffee = this.state.mainCoffeeList.filter(coffeeSku => coffeeSku.id === id)[0];
		this.setState({ selectedCoffee: selectedCoffee });
	}
	handleEditClick = () => {
		this.setState({ editing: true });
	}
	handleEditingSkuInList = (skuToEdit) => {
		const editedMainCoffeeList = this.state.mainCoffeeList
		.filter(coffeeSku => coffeeSku.id !== this.state.selectedCoffee.id)
		.concat(skuToEdit);
		this.setState({
			mainCoffeeList: editedMainCoffeeList;
			editing: false,
			selectedCoffee: null
		});
	}
	render() {
		let currentVisibleState = null;
		let buttonText = null;

		if (this.state.editing) {
			currentVisibleState = <EditForm coffeeSku={this.state.selectedCoffee} onEditCoffee={this.handleEditingSkuInList} />
			buttonText = "Return to Coffee List";
		} else if (this.state.formVisibleOnPage) {
			currentVisibleState = <NewSkuForm onNewSkuCreation={this.handleAddingNewSkuToList} />
			buttonText = "Return to Coffee List";
		} else {
			currentVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSkuSelection={this.handleChangingSelectedCoffee} />
			buttonText = "Add SKU";
		}

		return (
			<React.Fragment>
				{currentVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
		);
	}
}