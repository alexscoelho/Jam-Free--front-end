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
				<h4 className="pl-3">John Doe</h4>
				<Col xs={6} md={4}>
					<Image src="https://via.placeholder.com/150/0000FF/808080" roundedCircle />
				</Col>
			</div>
			{/* <div className="navs-wrapper"> */}
			<Nav variant="pills mt-2">
				<Nav.Item>
					<Nav.Link href="/profile">Edit Profile</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/schedule">My Shedulle</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Music Room</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3">Chat Room</Nav.Link>
				</Nav.Item>
			</Nav>
			{/* </div> */}
		</div>
	);
};
