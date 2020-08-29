import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import hero from "../../img/hero.jpg";
import "../../styles/home.scss";

// components
import { Cards } from "../component/cards";
import Image from "react-bootstrap/Image";

export const Landing = () => {
	return (
		<div className="landing-wrapper">
			<Image src={hero} fluid />
			<div className="cards-wrapper">
				<h3 className="text-center pb-2">Meet the instructors</h3>
				<Cards />
				<a className=" mb-3 d-block text-center text-dark" href="#">
					View all lessons
				</a>
			</div>
		</div>
	);
};
