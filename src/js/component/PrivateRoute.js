import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { store, actions } = useContext(Context);

	let { username, userType, loggedIn, token } = store.user;

	return (
		<Route
			{...rest} // using all the props inside of it, avoid using .something
			render={routeProps => (loggedIn ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />)} // using all the props from route component layout example : exacth path
		/>
	);
};
