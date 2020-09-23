//import react into the bundle
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomTeacherUpFile.scss";
import { Context } from "../store/appContext";

// react boostatrap
import { Form, Button, Nav, Col } from "react-bootstrap";

export const MusicRoomTeacherUpFile = () => {
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
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Instrument</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="instrument"
					value={file.instrument}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
				{/* <Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text> */}
			</Form.Group>
			{/* <Form.Group controlId="formBasicPassword">
				<Form.Label>File Type</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="typeFile"
					value={file.typeFile}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group> */}
			{/* <Form.Group controlId="formBasicPassword">
				<Form.Label>Level</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="level"
					value={file.level}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group> */}
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Language</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="language"
					value={file.language}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Url</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="url"
					value={file.url}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group>
			<Form.Group controlId="formGridState">
				<Form.Label>Level</Form.Label>
				<Form.Control
					as="select"
					defaultValue="Choose..."
					type="text"
					placeholder=""
					name="level"
					value={file.level}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}>
					<option>Beginner</option>
					<option>Intermediate</option>
					<option>Advanced</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId="formGridState">
				<Form.Label>File Type</Form.Label>
				<Form.Control
					as="select"
					defaultValue="Choose..."
					type="text"
					placeholder=""
					name="typeFile"
					value={file.typeFile}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}>
					<option>Video</option>
					<option>Article</option>
				</Form.Control>
			</Form.Group>
			<Button variant="primary" type="submit">
				Publish
			</Button>
		</Form>
	);
};
