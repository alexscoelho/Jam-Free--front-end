import React from "react";
import { Link } from "react-router-dom";

// react-bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navigation = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">Music School</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/signup">Sign up</Nav.Link>
					<Nav.Link href="/login">Login</Nav.Link>
					<Nav.Link href="#link">Donate</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
