import React, { useContext } from "react";

import "../../styles/home.scss";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export const MainProfile = () => {
	const { store, actions } = useContext(Context);
	let location = useLocation();
	return (
		<Container className="pt-3 bg-light">
			<Row>
				<Col>
					<div className="profile-info">
						<h5 className="profile-field">Username</h5>
						<p>Jon Doe</p>
					</div>
					<div className="profile-info">
						<h5 className="profile-field">Instrument</h5>
						<p>Guitar</p>
					</div>
					<div className="profile-info">
						<h5 className="profile-field">Language</h5>
						<p>English/Spanish</p>
					</div>
				</Col>
				<Col>
					<div className="profile-info">
						<h5 className="profile-field">Email</h5>
						<p>jondoe@email.com</p>
					</div>
					<div className="profile-info">
						<h5 className="profile-field">Level</h5>
						<p>Intermediate</p>
					</div>
					<div className="profile-info">
						<h5 className="profile-field">Timezone</h5>
						<p>East</p>
					</div>
				</Col>
			</Row>
			<Row className="pt-2">
				<Col>
					<div className="profile-info">
						<h5 className="profile-field">About Me</h5>
						<p>Besides music I like drawing, workout, travel and painting.</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
