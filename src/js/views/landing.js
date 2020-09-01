import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import hero from "../../img/hero.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

// components
import { Cards } from "../component/cards";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

export const Landing = () => {
	return (
		<div className="landing-wrapper">
			<Image src={hero} fluid />
			<div className="cards-wrapper">
				<h3 className="text-center pb-2">Meet the instructors</h3>
				<Cards />
				{/* <Link to="/main/music-room">View all lessons</Link> */}
				{/* <a className=" mb-3 d-block text-center text-dark" href="#">
					View all lessons
				</a> */}
				<Nav className="mb-3 d-block text-center text-dark">
					<Nav.Link as={Link} to="/main/music-room/teacher" className="text-dark">
						View all lessons
					</Nav.Link>
				</Nav>
			</div>
		</div>
	);
};
