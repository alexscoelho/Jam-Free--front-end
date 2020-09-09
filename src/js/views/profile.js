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

export const Profile = () => {
	const { store, actions } = useContext(Context);
	let location = useLocation();
	const fillProfile = () => {
		return store.profiles.map((item, index) => {
			return (
				<Form key={index}>
					<Form.Row>
						<Col xs="auto">
							<Form.Group controlId="formGridEmail">
								<Form.Label>First Name</Form.Label>
								<Form.Control type="text" value={item.name} />
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group controlId="formGridEmail">
								<Form.Label>Last Name</Form.Label>
								<Form.Control type="text" value={item.lastName} />
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group controlId="formGridEmail">
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" value={item.userName} />
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group controlId="formGridEmail">
								<Form.Label>Instrument</Form.Label>
								<Form.Control type="text" value={item.instrument} />
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group controlId="formGridEmail">
								<Form.Label>Level</Form.Label>
								<Form.Control type="text" value={item.level} />
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group controlId="formGridEmail">
								<Form.Label>Language</Form.Label>
								<Form.Control type="text" value={item.language} />
							</Form.Group>
						</Col>
						<Col xs="auto">
							<Form.Group controlId="formGridEmail">
								<Form.Label>Timezone</Form.Label>
								<Form.Control type="text" value={item.timeZone} />
							</Form.Group>
						</Col>
					</Form.Row>
				</Form>
			);
		});
	};
	return (
		// user main page, use LeftCol
		<Form>
			{fillProfile()}
			<Button variant="primary">Save</Button>{" "}
		</Form>
	);
};
