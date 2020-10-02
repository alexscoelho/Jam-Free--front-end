import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";

// react bootstrap
import { ListGroup, Popover, OverlayTrigger, Container, Row, Col, Spinner } from "react-bootstrap/";

export const AppointsmentsDetails = () => {
	const { store, actions } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchAppointments();
	}, []);

	async function fetchAppointments() {
		await actions.getAppointments();
		setLoading(false);
	}

	let customerAppointment = store.appointments.filter(appointment => {
		return appointment.customer_key == store.profile.customer_id;
	});

	console.log("customerAppointment:", customerAppointment);

	return customerAppointment.map((e, index) => {
		var d = new Date(e.start_time);
		let currentTeacher = store.teacher.filter(teacher => {
			return teacher.staff_key == e.staff_key;
		});

		// format hour
		function formatAMPM(date) {
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var ampm = hours >= 12 ? "pm" : "am";
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			minutes = minutes < 10 ? "0" + minutes : minutes;
			var strTime = hours + ":" + minutes + " " + ampm;
			return strTime;
		}

		const popover = (
			<Popover id="popover-basic" rootClose="true">
				<Popover.Title as="h3">Session details</Popover.Title>

				<Popover.Content>
					<Container>
						<Row>
							<Col className=" text-muted">Teacher</Col>
							<Col>{currentTeacher[0].email}</Col>
						</Row>
						<Row>
							<Col className=" text-muted">Time</Col>
							<Col>{formatAMPM(d)}</Col>
						</Row>
					</Container>
				</Popover.Content>
			</Popover>
		);

		return loading == false ? (
			<ListGroup key={index}>
				<OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
					<ListGroup.Item action>
						You have an appointment on {d.toDateString()} with {currentTeacher[0].name}
					</ListGroup.Item>
				</OverlayTrigger>
			</ListGroup>
		) : (
			<Spinner animation="grow" />
		);
	});
};
