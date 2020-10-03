import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

// react-bootstrap
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Footer = () => {
	// const { store, actions } = useContext(Context);
	// let { username, usertype, loggedIn } = store.user;

	return (
		<footer className="footer mt-auto py-3 text-center footer-style">
			<Nav className="justify-content-center" activeKey="/home">
				<Nav.Item>
					<Nav.Link href="/home" className="footer-style">
						<i className="fab fa-youtube" />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className="footer-style" eventKey="link-1">
						<i className="fab fa-instagram" />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className="footer-style" eventKey="link-2">
						<i className="fab fa-twitter" />
					</Nav.Link>
				</Nav.Item>
				<Nav.Link className="footer-style" href="/about" eventKey="link-2">
					About
				</Nav.Link>
			</Nav>

			{/* <Nav.Link className="text-dark" href="/about" eventKey="link-2">
			Contact
		</Nav.Link> */}
		</footer>
	);
};
