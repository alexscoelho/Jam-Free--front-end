import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useLocation, Route, Switch, useRouteMatch } from "react-router-dom";
import { Context } from "../store/appContext";

import { Profile } from "../views/profile";
import { Schedule } from "../views/schedule";
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
	let location = useLocation();
	let { path, url } = useRouteMatch();

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
					<Nav.Link as={Link} to={`${path}/music-room`} eventKey={`${path}/music-room`}>
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
			<Row>
				<Col xs={12} md={3} className="profile-left w-100 align-items-center">
					<div className="profile-wrapper d-flex flex-column align-items-center">
						<Image src="https://via.placeholder.com/150/0000FF/808080" roundedCircle />
						<h4>John Doe</h4>
					</div>

					<Nav variant="pills" defaultActiveKey={location.pathname} className="mt-2 d-none d-md-block">
						{renderNav()}
					</Nav>
				</Col>

				{/* add here the paths for music room and others */}
				<Col xs={12} md={6} className="profile-right">
					<Switch>
						<Route exact path={`${path}/profile`}>
							<Profile />
						</Route>
						<Route exact path={`${path}/schedule`}>
							<Schedule />
						</Route>
					</Switch>
				</Col>

				{/* only visible on mobile */}
				<Nav variant="pills" defaultActiveKey={location.pathname} className="col-12 mt-2 d-block d-md-none">
					{renderNav()}
				</Nav>
			</Row>
		</Container>
	);
};
