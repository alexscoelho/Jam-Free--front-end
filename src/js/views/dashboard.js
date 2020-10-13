import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useLocation, Route, Switch, useRouteMatch } from "react-router-dom";
import { Context } from "../store/appContext";

import { TypeAvatar } from "../component/typeAvatar";
import { MainProfile } from "../component/main-profile";
import { Profile } from "../views/profile";
import { Schedule } from "../views/schedule";
import { MusicRoom } from "../views/music-room";
import { ViewFile } from "../component/ViewFile";

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
	let { loggedIn } = store.user;
	let { account_type, username, level, profile_picture } = store.profile;
	let location = useLocation();
	let { path, url } = useRouteMatch();

	let role = account_type != undefined ? account_type.toLowerCase() : "";

	// console.log("account_type:", account_type);

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
						My Shedule
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to={`${path}/music-room/${role}`} eventKey={`${path}/music-room/${role}`}>
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
		<Container fluid className="h-100">
			<Row className="h-100">
				{/* conditionally show left profile */}
				{showLeftProfile && (
					<Col xs={12} md={3} className="py-3 profile-left w-100 align-items-center ">
						<div className="profile-wrapper d-flex flex-column align-items-center mt-4">
							{profile_picture !== null ? (
								<TypeAvatar type="avatar" src={profile_picture} />
							) : (
								<TypeAvatar type="" />
							)}

							{/* <Image src={profileImage} roundedCircle /> */}
							{/* <Image cloudName="alexsonc" publicId="drums-avatar.jpg" /> */}
							<div className="profile-image-footer mt-2 mr-auto">
								<Link className="link-profile" to={`${path}`}>
									<h5 className="profile-field text-dark">{store.profile.first_name}</h5>
								</Link>
								<p className="profile-field">{store.profile.account_type}</p>
								{/* <p className="profile-field">{store.profile.level}</p> */}
							</div>
						</div>

						<Nav variant="pills" defaultActiveKey={location.pathname} className="mt-2 d-none d-md-block">
							{renderNav()}
						</Nav>

						<Button
							variant="link"
							className="mb-2 d-none d-md-block profile-arrow-color"
							onClick={handleClick}>
							<i className={showLeftProfile ? "fas fa-arrow-left" : "fas fa-arrow-right"} />
						</Button>
					</Col>
				)}{" "}
				{showLeftProfile == false ? (
					<Button variant="link" className="mb-2 d-none d-md-block profile-arrow-color" onClick={handleClick}>
						<i className={showLeftProfile ? "fas fa-arrow-left" : "fas fa-arrow-right"} />
					</Button>
				) : null}
				{/* add here the paths for music room and others */}
				<Col xs={12} md={6} className="profile-right py-3 mt-4">
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
						<Route exact path={`${path}/music-room/:role`}>
							<MusicRoom />
						</Route>
						<Route exact path={`${path}/music-room/:role/file/:singleId`}>
							<ViewFile />
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
