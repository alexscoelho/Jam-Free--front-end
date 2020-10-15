import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Landing } from "./views/landing";
import { PrivateRoute } from "./component/PrivateRoute";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext, { Context } from "./store/appContext";

// import { Navbar } from "./component/navbar";
import { Navigation } from "./component/navigation";
import { Footer } from "./component/footer";
import Alert from "react-bootstrap/Alert";
import { Login } from "./views/login";
import { SignUp } from "./views/signup";
import { Dashboard } from "./views/dashboard";
import { Donations } from "./views/donations";
import { MusicRoomTeacherUpFile } from "./component/musicRoomTeacherUpFile";

// import { Schedule } from "./views/schedule";
import { About } from "./views/about";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	let { alertMessages } = store;
	let { username, userType, loggedIn, token } = store.user;
	// for alerts
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		if (alertMessages.visible) setShowAlert(true);
		// setTimeout(resetAlert, 5000);
	});

	// this uses funtionality that is on the store and is trigger with onClose here
	const resetAlert = () => {
		actions.resetMessage();
		setShowAlert(false);
	};

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			{/* alert to inform user */}
			{showAlert ? (
				<Alert variant={alertMessages.type} onClose={resetAlert} dismissible>
					<Alert.Heading>{alertMessages.heading}</Alert.Heading>
					<p>{alertMessages.errorMessage}</p>
				</Alert>
			) : null}
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navigation className="fixed-top" />
					<Switch>
						<Route exact path="/">
							<Landing />
							<Footer />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<PrivateRoute path="/main" component={Dashboard} />
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/donations">
							<Donations />
						</Route>
						{/* <Route path="/teacher/musicRoomTeacherUpFile">
							<MusicRoomTeacherUpFile />
						</Route> */}
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
