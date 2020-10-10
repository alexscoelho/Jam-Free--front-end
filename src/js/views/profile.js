import React, { useContext, useState } from "react";

import "../../styles/home.scss";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";

// react bootstrap
import { Image, Video, Transformation, CloudinaryContext } from "cloudinary-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";

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
	const [profilePicture, setProfilePicture] = useState(null);
	const [userId, setUserId] = useState("");

	const [isDisabled, setIsDisabled] = useState(true);

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
				description: description,
				profile_picture: profilePicture
			};

			if (isDisabled === true) {
				delete target_user.username;
			}

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

	// uploading image
	// const uploadImage = async e => {
	// 	const files = e.target.files;
	// 	const data = new FormData();

	// 	data.append("file", files[0]);
	// 	data.append("upload_preset", "txwwx7dx");
	// 	data.append("public_id", store.profile.id);

	// 	const resp = await fetch("https://api.cloudinary.com/v1_1/alexsonc/image/upload", {
	// 		method: "POST",
	// 		body: data
	// 	});
	// 	const file = await resp.json();
	// 	console.log("file:", file);
	// 	// setProfilePicture(files);
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
						<Form.Label>
							Username
							<i className="fas fa-pencil-alt username-edit" onClick={() => setIsDisabled(!isDisabled)} />
						</Form.Label>{" "}
						<Form.Control
							value={username}
							required
							type="text"
							onChange={e => setUsername(e.target.value)}
							placeholder="Enter username"
							disabled={isDisabled}
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
							onChange={e => uploa}
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
				<Col xs="6">
					<Form.Group>
						<Form.File
							id="formProfileImage"
							label="Profile picture"
							onChange={e => setProfilePicture(e.target.files[0])}
						/>
					</Form.Group>
				</Col>
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
