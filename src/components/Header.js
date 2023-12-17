import React from "react";
import header from "./../assets/header.jpg";

function Header() {
	return (
		<React.Fragment>
			<hr />
			<h1>The Coffee Collective</h1>
			<hr />
			<img src={header} height="600px" width="1000px" alt="assortment of coffee grounds and beans" />
			</React.Fragment>
	);
}

export default Header;