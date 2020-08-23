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
				<Cards />
			</div>
		</div>
	);
};
