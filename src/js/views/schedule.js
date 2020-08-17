import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";

export const Schedule = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<LeftCol />
				<div className="col-6 profile-right">Calendar goes here</div>
			</div>
		</div>
	);
};
