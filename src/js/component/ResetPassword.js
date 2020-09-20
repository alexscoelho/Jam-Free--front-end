import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ShowModal = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
		e.preventDefault();
		let resetPassword = {
			email: email,
		};
		// actions.loginUser(login_user, history);
	};

	return (
		<>
			{/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

			<Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Forgotten Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Enter your registration email below</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
						<Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" />
						<Form.Text className="text-muted">We wil never share your email with anyone else.</Form.Text>
					</Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Remind Me</Button>
                    
                </Modal.Footer>
            </Modal.Dialog>
		</>
	);
};
