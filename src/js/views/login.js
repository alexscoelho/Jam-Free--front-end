import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

// react-components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log("test");
		let login_user = {
			email: email,
			password: password
		};
		actions.loginUser(login_user);
	};

	// let history = useHistory();
	console.log(history);

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	actions.setLogin(true);
	// 	history.push("/main");
	// };

	return (
		<div className="container pb-4 pt-4">
			<div className="login-question w-50 m-auto">
				<h2>Login</h2>
				<div className="d-flex">
					<p>Dont have an account?</p>
					<Link to="/signup" className="login-link">
						<a className="ml-2" href="#">
							{" "}
							Sign up
						</a>
					</Link>
				</div>
			</div>
			<div className="w-50 form-wrapper m-auto pb-2">
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">We wil never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={e => setPassword(e.target.value)}
							type="password"
							placeholder="Password"
						/>
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
};
