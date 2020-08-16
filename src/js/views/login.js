import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

// react-components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = () => (
	<div className="container">
		<div className="login-question w-50 m-auto">
			<h2>Login</h2>
			<div className="d-flex">
				<p>Dont have an account?</p>
				<Link to="/signup">
					<a className="ml-2" href="#">
						{" "}
						Sign up
					</a>
				</Link>
			</div>
		</div>
		<div className="w-50 form-wrapper m-auto">
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">We wil never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</div>
	</div>
);
