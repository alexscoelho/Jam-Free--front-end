import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Link, useLocation, Route, Switch, useRouteMatch } from "react-router-dom";
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
	const [showContentStudent, setShowContentStudent] = useState(false);
	const [showContentTeacher, setShowContentTeacher] = useState(false);
	const handleClick = e => {
		console.log(e.target);

		if (e.target.value == "student") {
			setShowContentStudent(!showContentStudent);
		} else {
			setShowContentTeacher(!showContentTeacher);
		}
	};
	return (
		<Container>
			{/* for student */}
			<button onClick={e => handleClick(e)} value="student">
				Student
			</button>
			{showContentStudent && <MusicRoomStudent />}

			{/* for teacher */}
			<button onClick={e => handleClick(e)} value="teacher">
				Teacher
			</button>
			{showContentTeacher && <MusicRoomTeacherUpFile />}
		</Container>
	);
};
