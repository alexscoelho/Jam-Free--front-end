import React, { Component } from "react";

// react-bootstrap
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center ml-4 mr-4 ">
		<Nav className="justify-content-center" activeKey="/home">
			<Nav.Item>
				<Nav.Link href="/home">
					<i className="fab fa-youtube" />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">
					<i className="fab fa-instagram" />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">
					<i className="fab fa-twitter" />
				</Nav.Link>
			</Nav.Item>
			<Nav.Link href="/about" eventKey="link-2">
				About
			</Nav.Link>
		</Nav>
	</footer>
);
