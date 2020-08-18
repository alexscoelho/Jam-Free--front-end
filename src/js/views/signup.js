import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

// react-components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const SignUp = () => (
	<div className="container pb-4">
		<div className=" w-50 m-auto">
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
			<Form>
				<Form.Row className="d-block d-lg-flex">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text" placeholder="Enter First Name" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text" placeholder="Enter Last Name" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Email" />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="Username" />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Membership</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
							<option>Choose...</option>
							<option>Teacher</option>
							<option>Student</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>

				<Form.Row className="d-block d-lg-flex">
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label> Confirm Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
				</Form.Row>

				{/* <Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group> */}

				<Button variant="primary" type="submit">
					Sign Up
				</Button>
			</Form>
		</div>
	</div>
);
