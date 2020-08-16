import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// react bootstrap
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
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
		<div className="container">
			<div className="row">
				<div className="col-6 profile-left ">
					<div className=" profile-wrapper">
						<h3 className="pl-3">Your Profile</h3>
						<Col xs={6} md={4}>
							<Image src="https://via.placeholder.com/150/0000FF/808080" roundedCircle />
						</Col>
						<h5 className="pl-5 mt-2">John Doe</h5>
					</div>
					<div className="navs-wrapper">
						<Nav defaultActiveKey="/home" className="flex-column">
							<Nav.Link href="/profile">Edit Profile</Nav.Link>
							<Nav.Link eventKey="link-1">My Shedulle</Nav.Link>
							<Nav.Link eventKey="link-2">Music Room</Nav.Link>
							<Nav.Link eventKey="link-3">Chat Room</Nav.Link>
						</Nav>
					</div>
				</div>
				<div className="col-6">
					<Form>
						{fillProfile()}
						{/* <Form.Group controlId="formGridEmail">
							<Form.Label>First Name</Form.Label>
							<Form.Control type="text" placeholder="Enter First Name" />
						</Form.Group> */}
					</Form>
				</div>
			</div>
		</div>
	);
};
