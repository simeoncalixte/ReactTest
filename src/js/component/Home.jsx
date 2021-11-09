import React from "react";
import Main from "./Search.jsx";
import Nav from "./Nav.jsx";
import withGlobalState, { Context } from "../context/GlobalState.jsx";
//create your first component
const Home = () => {
	const globalState = React.useContext(Context);
	const [isOpen, toggleState] = React.useState(true);
	debugger;

	const closeFunction = () => {
		// toggleState(!isOpen);
		globalState.updateState();
	};

	return (
		<div className="text-center mt-5">
			<Nav />
			{isOpen && <Main title={"My Name"} closeFunction={closeFunction} />}
		</div>
	);
};

export default Home;
