import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Landing } from "./views/landing";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Navigation } from "./component/navigation";
import { Footer } from "./component/footer";
import MusicRoomTeacher from "./views/musicRoomTeacherUpVideo";
import MusicRoomTeacherUpFile from "./views/musicRoomTeacherUpFile";
import MusicRoomStudent from "./views/musicRoomStudent";
import { Login } from "./views/login";
import { SignUp } from "./views/signup";
import { Dashboard } from "./views/dashboard";
// import { Schedule } from "./views/schedule";
import { About } from "./views/about";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navigation />
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route path="/main">
							<Dashboard />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/musicRoomTeacherUpVideo">
							<MusicRoomTeacher />
						</Route>
						<Route exact path="/musicRoomTeacherUpFile">
							<MusicRoomTeacherUpFile />
						</Route>
						<Route exact path="/musicRoomStudent">
							<MusicRoomStudent />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
