import React from "react";
import Main from "./Main.jsx";
import Nav from "./Nav.jsx";
import withContext from "../context/GlobalState.jsx";
//create your first component
const Home = () => {
	const [isOpen, toggleState] = React.useState(true);

	const closeFunction = () => {
		toggleState(!isOpen);
	};

	return (
		<div className="text-center mt-5">
			<Nav />
			{isOpen && <Main title={"My Name"} closeFunction={closeFunction} />}
		</div>
	);
};

export default withContext(Home);
