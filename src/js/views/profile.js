import React, { useContext, useState } from "react";

import "../../styles/home.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
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

	const [firstName, setFirstName] = useState(store.profile.first_name);
	const [lastName, setLastName] = useState(store.profile.last_name);
	const [username, setUsername] = useState(store.profile.username);
	const [password, setPassword] = useState("");
	const [instrument, setInstrument] = useState(store.profile.instrument);
	const [language, setLanguage] = useState(store.profile.language);
	const [level, setLevel] = useState(store.profile.level);
	const [description, setDescription] = useState(store.profile.description);
	const [userId, setUserId] = useState("");

	// let history = useHistory();

	async function handleSubmit(e) {
		// actions.checkToken();

		// validation
		const form = e.currentTarget;
		if (form.checkValidity() === true) {
			e.preventDefault();
			let target_user = {
				first_name: firstName,
				last_name: lastName,
				username: username,
				password: password,
				instrument: instrument,
				language: language,
				level: level,
				description: description
			};
			let req = await actions.modifyUser(target_user);
			console.log("req:", req);
			if (req[0] === "Success") {
				actions.setMessage({
					visible: true,
					type: "success",
					heading: "Success!",
					errorMessage: "Profile modified"
				});
			} else {
				actions.setMessage({
					visible: true,
					type: "danger",
					heading: "Ooops!",
					errorMessage: req.message
				});
			}
		}
	}

	// const fillProfile = () => {
	// 	return store.profiles.map((item, index) => {
	// 		return (

	// 		);
	// 	});
	// };
	return (
		// user main page, use LeftCol
		<Form onSubmit={e => handleSubmit(e)}>
			<Form.Row>
				<Col xs="6">
					<Form.Group controlId="formFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							value={firstName}
							required
							type="text"
							onChange={e => setFirstName(e.target.value)}
							placeholder="Enter first name"
						/>
					</Form.Group>
				</Col>
				<Col xs="6">
					<Form.Group controlId="formLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							value={lastName}
							required
							type="text"
							onChange={e => setLastName(e.target.value)}
							placeholder="Enter last name"
						/>
					</Form.Group>
				</Col>
				<Col xs="6">
					<Form.Group controlId="formUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							value={username}
							required
							type="text"
							onChange={e => setUsername(e.target.value)}
							placeholder="Enter username"
						/>
					</Form.Group>
				</Col>
				<Col xs="6">
					<Form.Group controlId="formInstrument">
						<Form.Label>Instrument</Form.Label>
						<Form.Control
							value={instrument}
							required
							type="text"
							onChange={e => setInstrument(e.target.value)}
							placeholder="Enter instrument you play"
						/>
					</Form.Group>
				</Col>
				<Col xs="6">
					<Form.Group controlId="formLevel">
						<Form.Label>Level</Form.Label>
						<Form.Control
							value={level}
							required
							type="text"
							onChange={e => setLevel(e.target.value)}
							placeholder="enter your level"
						/>
					</Form.Group>
				</Col>
				<Col xs="6">
					<Form.Group controlId="formLanguage">
						<Form.Label>Language</Form.Label>
						<Form.Control
							value={language}
							required
							type="text"
							onChange={e => setLanguage(e.target.value)}
							placeholder="Enter your language"
						/>
					</Form.Group>
				</Col>
				{/* <Col xs="6">
                    <Form.Group controlId="formProfile">
                        <Form.Label>Timezone</Form.Label>
                        <Form.Control type="text" value={item.timeZone} />
                    </Form.Group>
                </Col> */}
				{/* <Col xs="6">
					<Form.Group controlId="formPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							value={password}
							required
							type="password"
							onChange={e => setPassword(e.target.value)}
							placeholder="Enter your password"
						/>
					</Form.Group>
				</Col>
				<Col xs="6">
					<Form.Group controlId="formUserId">
						<Form.Label>User ID</Form.Label>
						<Form.Control
							value={userId}
							required
							type="number"
							onChange={e => setUserId(e.target.value)}
							placeholder="Enter your user ID"
						/>
					</Form.Group>
				</Col> */}
				<Col xs="12">
					<Form.Group controlId="formProfile">
						<Form.Label>About me</Form.Label>
						<Form.Control
							value={description}
							required
							as="textarea"
							rows="3"
							placeholder="Brief description"
							onChange={e => setDescription(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Form.Row>
			<Button type="submit" variant="primary">
				Save
			</Button>{" "}
		</Form>
	);
};
