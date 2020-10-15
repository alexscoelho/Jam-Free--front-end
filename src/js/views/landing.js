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
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

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
			<div className="instructors cards-wrapper">
				<h3 className="text-center pb-2 text-dark">Meet the instructors</h3>
				<Cards />
				<Nav className="mb-3 d-block text-center text-dark">
					<Nav.Link as={Link} to="/signup" className="text-dark">
						<Button>Start learning</Button>
					</Nav.Link>
				</Nav>
			</div>
			
			<Carousel>
				<Carousel.Item className="slide">
					<div className="img-container">
						<img
							className="carousel-img"
							src="data:image/jpeg;base64,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"
						/>
					</div>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="slide">
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="slide">
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
