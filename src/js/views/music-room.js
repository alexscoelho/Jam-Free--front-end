import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Link, useLocation, Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

// components
import { MusicRoomStudent } from "../component/musicRoomStudent";
import { MusicRoomTeacherUpFile } from "../component/musicRoomTeacherUpFile";

export const MusicRoom = () => {
	const { store, actions } = useContext(Context);
	let { userType } = useParams();
	let { user } = store;
	const noAccess = (
		<div>
			<h2>Cannot Access Route</h2>
			<p>You do not have access to the current route. Please check your user type and try again.</p>
		</div>
	);
	const notFound = (
		<div>
			<h2>Route not found</h2>
			<p>The sub-route you have tried to access is not available. Please try again.</p>
		</div>
	);

	const getContent = () => {
		if (userType.toLowerCase() === "student" && user.userType.toLowerCase() === "student") {
			return <MusicRoomStudent />;
		} else if (userType.toLowerCase() === "student" && user.userType.toLowerCase() !== "student") {
			return noAccess;
		} else if (userType.toLowerCase() === "teacher" && user.userType.toLowerCase() === "teacher") {
			return <MusicRoomTeacherUpFile />;
		} else if (userType.toLowerCase() === "teacher" && user.userType.toLowerCase() !== "teacher") {
			return noAccess;
		}

		return notFound;
	};
	return <Container>{getContent()}</Container>;
};
