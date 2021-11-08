///Class Component
import React from "react";
import Proptypes from "prop-types";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		alert("Component Did Mount");
		setTimeout(() => this.setState({ loading: false }), 4000);
	}
	componentWillUnmount() {
		alert("Component Did UnMount");
	}

	onClick = e => {
		alert();
		const newState = Object.assign(this.state, {
			paragraph: "Hello Carlos You are an awesome dev"
		});
		this.setState(newState);
	};

	removeElement = e => {
		delete this;
	};

	render() {
		return (
			<>
				<h1 onClick={this.props.closeFunction}>{this.props.title}</h1>
				<p>{this.state.loading ? "....isloading" : "loaded"}</p>
			</>
		);
	}
}
Main.propTypes = {
	title: Proptypes.string,
	isOpen: Proptypes.bool,
	closeFunction: Proptypes.func
};
export default Main;
