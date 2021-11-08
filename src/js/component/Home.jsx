import React from "react";
import Main from "./Search.jsx";
import Nav from "./Nav.jsx";
import Context from "../context/GlobalState.jsx";
//create your first component
const Home = () => {
	debugger;
	const globalState = React.useContext(Context);
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

export default Home;
