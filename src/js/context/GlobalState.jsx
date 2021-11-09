import React from "react";
const defaultValue = new (function test3() {
	this.store = {
		auth: ""
	};

	function test3(parm) {
		this.store.auth = "Nick";
	}

	function updateState() {
		this.store.auth = "Ivan";
	}

	function test4() {
		this.store.auth = "Calixte";
	}
	return {
		test3,
		updateState,
		test4,
		store: this.store
	};
})();
export const Context = React.createContext(defaultValue);
/////HOC
const withGlobalState = WrappedComponent => {
	//returning component
	const GlobalProvider = function() {
		const actualContextWithUpdate = React.useState({});
		const [actualContext, updateContext] = actualContextWithUpdate;

		const updateState = () => {
			updateContext({
				auth: {
					userName: "Nick"
				}
			});
		};

		return (
			<Context.Provider value={{ actualContextWithUpdate, updateState }}>
				<WrappedComponent />
			</Context.Provider>
		);
	};

	return GlobalProvider;
};
export default withGlobalState;
