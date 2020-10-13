import React, { useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import guitarImage from "../../img/guitar.jpg";

// components
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import { ViewFile } from "../component/ViewFile";

export const Donations = () => {
	const { store, actions } = useContext(Context);
	console.log(store.files);
	return (
		<div>
			<div>
				<Jumbotron
					style={{
						backgroundImage: `url(${guitarImage})`,
						backgroundSize: "cover",
						color: "white",
						height: "50vh"
					}}>
					<h1>Donate</h1>
					<p>Connecting guitar students and teachers one step closer</p>
					<p>
						<Button variant="primary">Donate Now</Button>
					</p>
				</Jumbotron>
			</div>

			<div>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe
									className="embed-responsive-item"
									src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
								/>
							</div>
						</div>
						<div className="col center">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>Meet Our Students</div>

			<div>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">Well never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>

			<div>
				<Carousel
					fade="true"
					style={{
						color: "white",
						height: "40vh"
					}}>
					<Carousel.Item>
						<img className="d-block w-100" src="../../guitar.jpg" alt="First slide" />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="../../guitar.jpg" alt="Third slide" />

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src="../../guitar.jpg" alt="Third slide" />

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
};
