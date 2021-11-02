/// Functional Component
import React from "react";
import navigationData from "../data/navigation.json";
import { Context } from "../context/GlobalState.jsx";
export const Nav = props => {
	const vary = React.useContext(Context);
	const [isLoading, setLoadingState] = React.useState(false);
	const [authenticated, setAuthenticationState] = React.useState(false);
	const [wasHovered, setHoveredElement] = React.useState(false);

	console.log({ vary });
	///render on every change + mount and unmount
	const onMount = () => {
		console.log("onMount");
	};

	const unMountFunction = () => {
		console.log("unMount");
	};
	React.useEffect(() => {
		///////onmount
		onMount();

		return unMountFunction; ///unmount
	});

	///render on mount, unmount, and [state/props] change
	React.useEffect(() => {
		///////onmount
		onMount();

		return unMountFunction; ///unmount
	}, [isLoading, authenticated, wasHovered]);

	//render on mount and unmount
	React.useEffect(() => {
		///logic here
	}, []);

	const createNavElements = navigationData.map((element, i) => {
		return (
			<li key={i} onClick={() => setLoadingState(!isLoading)}>
				<a href={element.href}>{element.label}</a>
			</li>
		);
	});

	return (
		<>
			{isLoading ? "is Loading" : "loaded"}
			<ul>{createNavElements}</ul>
		</>
	);
};

export default Nav;
