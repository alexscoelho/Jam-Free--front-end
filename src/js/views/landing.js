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
import Container from "react-bootstrap/Container";

export const Landing = () => {
	const { store, actions } = useContext(Context);
	console.log("user:", store.user);
	return (
		<div className="landing-wrapper">
			<div className="video-wrapper">
				<video loop muted autoPlay playsinline>
					<source
						// src="https://e51ed9df-f474-46bf-bf1a-0382fc297159.ws-us02.gitpod.io/files/download/?id=0b3207bc-9912-4256-bd42-ad94b0092dc9"
						// type="video/mp4"
						src={video}
					/>
				</video>
			</div>
			<div className="cards-wrapper">
				<h3 className="text-center pb-2 text-dark">Meet the instructors</h3>
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
