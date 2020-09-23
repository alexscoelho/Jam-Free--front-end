//import react into the bundle
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomTeacherUpFile.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

// react boostatrap
import { Form, Button, Nav, Col } from "react-bootstrap";

export const MusicRoomTeacherUpFile = ({ check, setCheck }) => {
	const { store, actions } = useContext(Context);
	const [file, setFile] = useState({
		instrument: "",
		typeFile: "",
		level: "",
		language: "",
		url: "",
		userId: store.user.userId
	});
	console.log(file);

	async function handleSubmit(e) {
		console.log("test");
		e.preventDefault();
		let req = await actions.publishFile(file);
		if (req === "Success") {
			actions.setMessage({
				visible: true,
				type: "success",
				heading: "Success!",
				errorMessage: "You added a new publish to music room"
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

	return (
		<Form onSubmit={e => handleSubmit(e)}>
			<Form.Group controlId="formGridState">
				<Form.Label>Instrument</Form.Label>
				<Form.Control
					required
					as="select"
					defaultValue=""
					type="text"
					placeholder=""
					name="instrument"
					value={file.instrument}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}>
					<option />
					<option>Guitar</option>
					<option>Piano</option>
					<option>Drums</option>
					<option>Violin</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="formGridState">
				<Form.Label>Language</Form.Label>
				<Form.Control
					required
					as="select"
					defaultValue=""
					type="text"
					placeholder=""
					name="language"
					value={file.language}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}>
					<option />
					<option>Spanish</option>
					<option>English</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="formGridState">
				<Form.Label>Level</Form.Label>
				<Form.Control
					required
					as="select"
					defaultValue=""
					type="text"
					placeholder=""
					name="level"
					value={file.level}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}>
					<option />
					<option>Beginner</option>
					<option>Intermediate</option>
					<option>Advanced</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="formGridState">
				<Form.Label>File Type</Form.Label>
				<Form.Control
					required
					as="select"
					defaultValue=""
					type="text"
					placeholder=""
					name="typeFile"
					value={file.typeFile}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}>
					<option />
					<option>Video</option>
					<option>Article</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Url</Form.Label>
				<Form.Control
					required
					type="text"
					placeholder=""
					name="url"
					value={file.url}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Publish
			</Button>
			<Button
				onClick={() => {
					setCheck(true);
				}}
				variant="primary">
				Go Back
			</Button>
		</Form>
	);
};

MusicRoomTeacherUpFile.propTypes = {
	check: PropTypes.bool,
	setCheck: PropTypes.func
};
