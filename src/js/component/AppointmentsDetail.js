import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";

// react bootstrap
import { ListGroup, Popover, OverlayTrigger, Container, Row, Col } from "react-bootstrap/";

export const AppointsmentsDetails = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAppointments();
	}, []);

	let customerAppointment = store.appointments.filter(appointment => {
		return appointment.customer_key == store.profile.customer_id;
	});

	console.log("customerAppointment:", customerAppointment);

	return customerAppointment.map((e, index) => {
		var d = new Date(e.start_time);
		let currentTeacher = store.teacher.filter(teacher => {
			return teacher.staff_key == e.staff_key;
		});

		const popover = (
			<Popover id="popover-basic" rootClose="true">
				<Popover.Title as="h3">Session details</Popover.Title>

				<Popover.Content>
					<div>Teacher email: {currentTeacher[0].email}</div>
					<div>Time: {d.toTimeString()}</div>

					{/* <Container>
						<Row>
							<Col></Col>
						</Row>
                        <Row>
							<Col>Teacher email: {currentTeacher[0].email}</Col>
						</Row>
					</Container> */}
				</Popover.Content>
			</Popover>
		);

		return (
			<ListGroup key={index}>
				<OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
					<ListGroup.Item action>
						You have an appointment on {d.toDateString()} with {currentTeacher[0].name}
					</ListGroup.Item>
				</OverlayTrigger>
			</ListGroup>
		);
	});
};
