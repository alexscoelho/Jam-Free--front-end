import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useLocation, Route, Switch, useRouteMatch } from "react-router-dom";
import { Context } from "../store/appContext";

import { MainProfile } from "../component/main-profile";
import { Profile } from "../views/profile";
import { Schedule } from "../views/schedule";
import { MusicRoom } from "../views/music-room";
import { MusicRoomStudent } from "../component/musicRoomStudent";
// components
import { LeftCol } from "../component/left-col";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

export const Dashboard = () => {
	const [showLeftProfile, setShowLeftProfile] = useState(true);
	const { store, actions } = useContext(Context);
	let { userType, username, loggedIn } = store.user;
	let location = useLocation();
	let { path, url } = useRouteMatch();

	// close left profile bar
	const handleClick = () => {
		setShowLeftProfile(!showLeftProfile);
	};

	// reusable navs
	const renderNav = () => {
		return (
			// use fragment when you want to use a div that does not affect
			<React.Fragment>
				<Nav.Item>
					{/* useRouteMatch path is taken from layout*/}
					<Nav.Link as={Link} to={`${path}/profile`} eventKey={`${path}/profile`}>
						Edit Profile
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to={`${path}/schedule`} eventKey={`${path}/schedule`}>
						My Shedulle
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						as={Link}
						to={`${path}/music-room/${userType}`}
						eventKey={`${path}/music-room/${userType}`}>
						Music Room
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to={`${path}/chat`} eventKey={`${path}/chat`}>
						Chat Room
					</Nav.Link>
				</Nav.Item>
			</React.Fragment>
		);
	};

	return (
		// user main page, use LeftCol
		<Container fluid>
			<Row className="pt-3 pb-3">
				{/* conditionally show left profile */}
				{showLeftProfile && (
					<Col xs={12} md={3} className="profile-left w-100 align-items-center">
						<div className="profile-wrapper d-flex flex-column align-items-center">
							<Image src="https://via.placeholder.com/150/0000FF/808080" roundedCircle />
							<div className="profile-image-footer mt-2">
								{/* <Nav>
									<Nav.Item>
										<Nav.Link as={Link} to={`${path}`} eventKey={`${path}`}>
											John Doe
										</Nav.Link>
									</Nav.Item>
								</Nav> */}
								<Link className="link-profile" to={`${path}`}>
									<h5 className="profile-field text-dark">John Doe</h5>
								</Link>
								<p className="profile-field">Pembroke Pines, FL</p>
								<p className="profile-field">954 123 4567</p>
							</div>
						</div>

						<Nav variant="pills" defaultActiveKey={location.pathname} className="mt-2 d-none d-md-block">
							{renderNav()}
						</Nav>
					</Col>
				)}
				{/* add here the paths for music room and others */}
				<Col xs={12} md={6} className="profile-right">
					<Switch>
						<Route exact path={`${path}`}>
							<MainProfile />
						</Route>
						<Route exact path={`${path}/profile`}>
							<Profile />
						</Route>
						<Route exact path={`${path}/schedule`}>
							<Schedule />
						</Route>
						{/* usertype is variable, from store depending on user */}
						<Route path={`${path}/music-room/:userType`}>
							<MusicRoom />
						</Route>
					</Switch>
				</Col>
				{/* only visible on mobile */}
				<Nav variant="pills" defaultActiveKey={location.pathname} className="col-12 mt-2 d-block d-md-none">
					{renderNav()}
				</Nav>
			</Row>
			<Button variant="link" className="mb-2 d-none d-md-block" onClick={handleClick}>
				<i className={showLeftProfile ? "fas fa-arrow-left" : "fas fa-arrow-right"} />
			</Button>
		</Container>
	);
};
