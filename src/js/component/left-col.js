import React, { Component } from "react";
import "../../styles/home.scss";

// react-bootstrap
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const LeftCol = () => {
	return (
		<div className="col-6 profile-left ">
			<div className=" profile-wrapper">
				<h3 className="pl-3">Your Profile</h3>
				<Col xs={6} md={4}>
					<Image src="https://via.placeholder.com/150/0000FF/808080" roundedCircle />
				</Col>
				<h5 className="pl-5 mt-2">John Doe</h5>
			</div>
			<div className="navs-wrapper">
				<Nav defaultActiveKey="/home" className="flex-column">
					<Nav.Link href="/profile">Edit Profile</Nav.Link>
					<Nav.Link href="/schedule" eventKey="link-1">
						My Shedulle
					</Nav.Link>
					<Nav.Link eventKey="link-2">Music Room</Nav.Link>
					<Nav.Link eventKey="link-3">Chat Room</Nav.Link>
				</Nav>
			</div>
		</div>
	);
};
