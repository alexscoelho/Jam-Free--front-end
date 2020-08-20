import React, { Component } from "react";
import "../../styles/home.scss";
import { Link, useLocation } from "react-router-dom";

// react-bootstrap
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const LeftCol = props => {
	let location = useLocation();

	return (
		// only for lg screen
		<Col xs={12} md={3} className="profile-left w-100 align-items-center">
			<div className="profile-wrapper d-flex flex-column align-items-center">
				<Image src="https://via.placeholder.com/150/0000FF/808080" roundedCircle />
				<h4>John Doe</h4>
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
