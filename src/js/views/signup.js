import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// react-components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

	// for modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [firstName, setFirstName] = useState("");
	const [lasttName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [accountType, setAccountType] = useState("");
	const [language, setLanguage] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		let user = {
			first_name: firstName,
			last_name: lasttName,
			email: email,
			password: password,
			account_type: accountType,
			language: language
		};
		actions.createUser(user);
	};

	return (
		<div className="container pb-4 pt-4">
			<div className=" w-50 m-auto">
				{/* modal to display message to user */}
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
				<h2>Sign up</h2>
				<div className="d-flex">
					<p>Already have an account?</p>
					<Link to="/login">
						<a className="ml-2" href="#">
							{" "}
							Login
						</a>
					</Link>
				</div>
			</div>
			<div className=" w-50 form-wrapper m-auto">
				<Form onSubmit={e => handleSubmit(e)}>
					<Form.Row className="d-block d-lg-flex">
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								onChange={e => setFirstName(e.target.value)}
								type="text"
								placeholder="Enter First Name"
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								onChange={e => setLastName(e.target.value)}
								type="text"
								placeholder="Enter Last Name"
							/>
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>Email</Form.Label>
						<Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Language</Form.Label>
							<Form.Control
								onChange={e => setLanguage(e.target.value)}
								type="text"
								placeholder="Username"
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>Account Type</Form.Label>
							<Form.Control
								onChange={e => setAccountType(e.target.value)}
								as="select"
								defaultValue="Choose...">
								<option>Choose...</option>
								<option>Teacher</option>
								<option>Student</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>

					<Form.Row className="d-block d-lg-flex">
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>Password</Form.Label>
							<Form.Control onChange={e => setPassword(e.target.value)} type="password" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label> Confirm Password</Form.Label>
							<Form.Control type="password" />
						</Form.Group>
					</Form.Row>

					{/* <Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group> */}

					<Button variant="primary" type="submit" onClick={handleShow}>
						Sign Up
					</Button>
				</Form>
			</div>
		</div>
	);
};
