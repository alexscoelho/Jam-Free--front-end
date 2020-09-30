import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";

// react bootstrap
import ListGroup from "react-bootstrap/ListGroup";

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
		console.log("currentTeacher:", currentTeacher);
		return (
			<ListGroup key={index}>
				<ListGroup.Item>
					You have an appointment on {d.toDateString()} at {d.getUTCHours()}:{d.getUTCMinutes()} with{" "}
					{currentTeacher[0].name}
				</ListGroup.Item>
			</ListGroup>
		);
	});
};
