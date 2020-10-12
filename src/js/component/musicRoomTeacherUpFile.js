//import react into the bundle
import React, { useContext, useState } from "react";
import Select from "react-select";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomTeacherUpFile.scss";
import { Context } from "../store/appContext";
import PropTypes, { array } from "prop-types";
import guitar from "../../img/guitar-avatar.jpg";
import piano from "../../img/piano-avatar.jpg";
import drums from "../../img/drums-avatar.jpg";
import violin from "../../img/violin-avatar.jpg";

// react boostatrap
import { Form, Button, Nav, Col } from "react-bootstrap";

// custom select
const options = [
	{
		value: "guitar",
		label: (
			<div>
				<img src={guitar} height="30px" width="30px" />
				Guitar{" "}
			</div>
		)
	},
	{
		value: "piano",
		label: (
			<div>
				<img src={piano} height="30px" width="30px" />
				Piano{" "}
			</div>
		)
	},
	{
		value: "drums",
		label: (
			<div>
				<img src={drums} height="30px" width="30px" />
				Drums{" "}
			</div>
		)
	},
	{
		value: "violin",
		label: (
			<div>
				<img src={violin} height="30px" width="30px" />
				Violin{" "}
			</div>
		)
	}
];

export const MusicRoomTeacherUpFile = ({ check, setCheck, singleFile, fileAction }) => {
	const { store, actions } = useContext(Context);

	const [file, setFile] = useState({
		title: fileAction === "edit" ? singleFile.title : "",
		instrument: fileAction === "edit" ? singleFile.instrument : "",
		typeFile: fileAction === "edit" ? singleFile.typeFile : "",
		level: fileAction === "edit" ? singleFile.level : "",
		language: fileAction === "edit" ? singleFile.language : "",
		url: fileAction === "edit" ? singleFile.url : "",
		userId: store.user.userId
	});

	// for range slider
	var instrumentLevel;
	if (file.level < 30) {
		instrumentLevel = "Beginner";
	} else if (file.level > 30 && file.level < 60) {
		instrumentLevel = "Intermediate";
	} else {
		instrumentLevel = "Advanced";
	}

	async function handleSubmit(e) {
		e.preventDefault();

		file.level = instrumentLevel;
		// create a new file
		if (fileAction === "create") {
			let req = await actions.publishFile(file);

			console.log(req);
			if (req[1] === 200) {
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
		} else {
			// edit existing file
			let req = await actions.modifyFile(file, singleFile.id);

			console.log(req);
			if (req[1] === 200) {
				actions.setMessage({
					visible: true,
					type: "success",
					heading: "Success!",
					errorMessage: "File modified"
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

		actions.getFiles();
	}

	return (
		<Form onSubmit={e => handleSubmit(e)}>
			<Form.Group>
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					placeholder=""
					name="title"
					value={file.title}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Instrument</Form.Label>
				<Select options={options} onChange={e => setFile({ ...file, instrument: e.value })} />
			</Form.Group>
			{/* <Form.Group controlId="formGridState">
				<Form.Label>Instrument</Form.Label>
				<Form.Control
					custom
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
			</Form.Group> */}
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
			<Form.Group controlId="formBasicRange">
				<Form.Label>Level</Form.Label>
				<Form.Control
					type="range"
					name="level"
					value={file.level}
					// onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
					onChange={e => setFile({ ...file, [e.target.name]: e.target.value })}
				/>
				<p>{instrumentLevel}</p>
			</Form.Group>
			{/* <Form.Group controlId="formGridState">
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
			</Form.Group> */}
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
			{fileAction === "create" ? (
				<Button variant="primary" type="submit" className="mr-2">
					Publish
				</Button>
			) : (
				<Button variant="primary" type="submit" className="mr-2">
					Save Changes
				</Button>
			)}
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
	setCheck: PropTypes.func,
	singleFile: PropTypes.arr,
	fileAction: PropTypes.string
};
