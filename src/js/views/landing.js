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
				<Row className="mx-auto justify-content-center app-mission container">
					<Col xs={12} md={4}>
						<h1>Your Journey starts now...</h1>
					</Col>
					<Col xs={12} md={4}>
						<h5 className="subtitle">You will be learning to play like the best, by the best</h5>
					</Col>
					<Col xs={12} md={4}>
						<span className="ml-3 sub-subtitle">
							JammFree is an online music learning platform designed for you
						</span>
					</Col>
				</Row>
				{/* <Row className="video-wrapper d-flex justify-content-center mt-3">
					<video loop muted autoPlay playsinline>
						<source
							// src="https://e51ed9df-f474-46bf-bf1a-0382fc297159.ws-us02.gitpod.io/files/download/?id=0b3207bc-9912-4256-bd42-ad94b0092dc9"
							// type="video/mp4"
							src={video}
						/>
					</video>
				</Row> */}
				<Row className="mx-auto justify-content-center app-options container">
					<Col xs={12} md={4} className="my-3 my-md-0">
						<i className="fas fa-video app-options-icons " />
						<h3>Video lessons</h3>
						<p>Provided exclusivele by our instructors</p>
					</Col>
					<Col xs={12} md={4} className="my-3 my-md-0">
						<i className="far fa-folder-open app-options-icons " />
						<h3>Lecture lessons</h3>
						<p>Learn music theory</p>
					</Col>
					<Col xs={12} md={4} className="my-3 my-md-0">
						<i className="fas fa-chalkboard-teacher app-options-icons " />
						<h3>One on one sessions</h3>
						<p>Schedule a 1 hour lesson with your favorite instructor</p>
					</Col>
				</Row>
			</Container>
			{/* <Row className="video-wrapper d-flex justify-content-center mt-3">
				<video loop muted autoPlay playsinline>
					<source
						// src="https://e51ed9df-f474-46bf-bf1a-0382fc297159.ws-us02.gitpod.io/files/download/?id=0b3207bc-9912-4256-bd42-ad94b0092dc9"
						// type="video/mp4"
						src={video}
					/>
				</video>
			</Row> */}
			<div className="cards-wrapper">
				<h3 className="text-center pb-2 text-dark">Meet the instructors</h3>
				<Cards />
				{/* <Link to="/main/music-room">View all lessons</Link> */}
				{/* <a className=" mb-3 d-block text-center text-dark" href="#">
					View all lessons
				</a> */}
				<Nav className="mb-3 d-block text-center text-dark">
					<Nav.Link as={Link} to="/signup" className="text-dark">
						<Button>Start learning</Button>
					</Nav.Link>
				</Nav>
			</div>
		</div>
	);
};
