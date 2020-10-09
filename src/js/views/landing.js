import React, { useContext } from "react";

import video from "../../img/video.mp4";
import hero from "../../img/hero.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { Cards } from "../component/cards";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Landing = () => {
	const { store, actions } = useContext(Context);
	console.log("user:", store.user);
	return (
		<div className="landing-wrapper">
			<Container fluid>
				<Row className="video-wrapper d-flex justify-content-center ">
					<video loop muted autoPlay playsinline>
						<source src={video} />
					</video>
				</Row>
				<Row className="mx-auto justify-content-center app-mission container">
					<Col xs={12} md={4} className="mb-2">
						<h3 className="subtitle">You will be learning to play like the best, by the best</h3>
					</Col>
					<Col xs={12} md={4}>
						<h3 className="sub-subtitle">JammFree is an online music learning platform designed for you</h3>
					</Col>
				</Row>
				<Row className="mx-auto justify-content-center app-options container">
					<Col xs={12} md={4} className="my-3 my-md-0 text-center">
						<i className="fas fa-video app-options-icons " />
						<h3>Video lessons</h3>
						<p>Provided exclusivele by our instructors</p>
					</Col>
					<Col xs={12} md={4} className="my-3 my-md-0 text-center">
						<i className="far fa-folder-open app-options-icons " />
						<h3>Lecture lessons</h3>
						<p>Learn music theory</p>
					</Col>
					<Col xs={12} md={4} className="my-3 my-md-0 text-center">
						<i className="fas fa-chalkboard-teacher app-options-icons " />
						<h3>One on one sessions</h3>
						<p>Schedule a 1 hour lesson with your favorite instructor</p>
					</Col>
				</Row>
			</Container>
			<div className="cards-wrapper">
				<h3 className="text-center pb-2 text-dark">Meet the instructors</h3>
				<Cards />
				<Nav className="mb-3 d-block text-center text-dark">
					<Nav.Link as={Link} to="/signup" className="text-dark">
						<Button>Start learning</Button>
					</Nav.Link>
				</Nav>
			</div>
		</div>
	);
};
