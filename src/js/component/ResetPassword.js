import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ResetPassword = props => {
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");

	const { show, closeModal } = props;

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const handleSubmit = e => {
		e.preventDefault();
		let resetPassword = {
			email: email
		};
		// actions.loginUser(login_user, history);
	};

	return (
		<>
			{/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Forgotten Password</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Please Enter your registration email below</p>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Control
								onChange={e => setEmail(e.target.value)}
								type="email"
								placeholder="Email Address"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
					<Button variant="secondary">Remind Me</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
	ResetPassword.propTypes = {
		show: PropTypes.bool,
		closeModal: PropTypes.bool
	};
};
