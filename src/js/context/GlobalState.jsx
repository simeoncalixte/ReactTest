import React from "react";

const initialValue = {
	loading: false,
	setLoading: () => {
		this.loading = true;
	}
};
export const Context = React.createContext(initialValue);

function withContext(Component) {
	return function withContextFunction(props) {
		return <Component />;
	};
}

export default withContext;
