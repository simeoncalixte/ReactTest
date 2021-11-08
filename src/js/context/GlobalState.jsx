import React from "react";

const defaultValue = {
	auth: {
		userName: null,
		jst: "kdfjakjfoiq34u2foasdfa",
		firstName: ""
	}
};

const Context = React.createContext(defaultValue);

export default Context;
