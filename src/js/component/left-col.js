import React, { Component } from "react";
import "../../styles/home.scss";
import { Link, useLocation } from "react-router-dom";

// react-bootstrap
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

import { TypeAvatar } from "./typeAvatar";

export const LeftCol = props => {
	let location = useLocation();

	return (
		// only for lg screen

		<Col xs={12} md={3} className="profile-left w-100 align-items-center">
			<div className="profile-wrapper d-flex flex-column align-items-center ">
				{/* <TypeAvatar type="avatar" src={}/> */}
				<div className="profile-footer">
					<h5>John Doe</h5>
					<p>Pembroke Pines, FL</p>
					<p>954 123 4567</p>
				</div>
			</div>
			<Nav variant="pills" defaultActiveKey={location.pathname} className="mt-2 d-none d-md-block">
				<Nav.Item>
					<Nav.Link as={Link} to="/profile" eventKey="/profile">
						Edit Profile
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/schedule" eventKey="/schedule">
						My Shedulle
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/music-room" eventKey="/music-room">
						Music Room
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link as={Link} to="/chat" eventKey="/chat">
						Chat Room
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Col>
	);
};
