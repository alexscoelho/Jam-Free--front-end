//import react into the bundle
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomTeacherUpFile.scss";
import { Context } from "../store/appContext";

// react boostatrap
import { Form, Button, Nav } from "react-bootstrap";

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
	console.log("file:", file);
	return (
		<Form>
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
			<Form.Group controlId="formBasicPassword">
				<Form.Label>File Type</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="typeFile"
					value={file.typeFile}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Level</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="level"
					value={file.level}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group>
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
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};
