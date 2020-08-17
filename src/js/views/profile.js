import React, { useContext } from "react";

import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";

// react bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const fillProfile = () => {
		return store.profiles.map((item, index) => {
			return (
				<div key={index}>
					<Form.Group controlId="formGridEmail">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text" value={item.name} />
					</Form.Group>
					<Form.Group controlId="formGridEmail">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text" value={item.lastName} />
					</Form.Group>
					<Form.Group controlId="formGridEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" value={item.userName} />
					</Form.Group>
					<Form.Group controlId="formGridEmail">
						<Form.Label>Instrument</Form.Label>
						<Form.Control type="text" value={item.instrument} />
					</Form.Group>
					<Form.Group controlId="formGridEmail">
						<Form.Label>Level</Form.Label>
						<Form.Control type="text" value={item.level} />
					</Form.Group>
					<Form.Group controlId="formGridEmail">
						<Form.Label>Language</Form.Label>
						<Form.Control type="text" value={item.language} />
					</Form.Group>
					<Form.Group controlId="formGridEmail">
						<Form.Label>Timezone</Form.Label>
						<Form.Control type="text" value={item.timeZone} />
					</Form.Group>
				</div>
			);
		});
	};
	return (
		// user main page, use LeftCol for left col
		<div className="container-fluid">
			<div className="row">
				<LeftCol />
				<div className="col-6 profile-right">
					<Form>
						{fillProfile()}
						<Button variant="primary">Save</Button>{" "}
					</Form>
				</div>
			</div>
		</div>
	);
};
