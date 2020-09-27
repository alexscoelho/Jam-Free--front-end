import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";

// react bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const Schedule = () => {
	// state for storing checking and storing available dates
	const { store, actions } = useContext(Context);
	// const [date, checkDate] = useState(store.teacher[0].availability);

	const [date, setDate] = useState();
	const [startTime, setStartTime] = useState();
	const [endTime, setEndTime] = useState();
	let appointmentStartTime = `${date}T${startTime}Z`;
	let appointmentEndTime = `${date}T${endTime}Z`;

	let location = useLocation();

	const handleSubmit = (e, index) => {
		e.preventDefault();

		let appointment = {
			staff_key: store.teacher[index].staff_key,
			service_key: store.service_key,
			customer_key: store.profile.customer_id,
			start_time: appointmentStartTime,
			end_time: appointmentEndTime,
			comment: "Test comment",
			label: "Test Label"
		};
		actions.createAppointment(appointment);

		console.log("test:", appointment);

		// checkDate(store.checkAvailabity);
	};

	// function to generate each item on the list (teachers)
	const scheduler = () => {
		return store.teacher.map((item, index) => {
			return (
				<ListGroup.Item key={index}>
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							{item.name} - {item.instrument}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Form onSubmit={e => handleSubmit(e, index)}>
								<input value={date} type="date" onChange={e => setDate(e.target.value)} />
								<div>
									{" "}
									Start Hour:
									<input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />
								</div>
								<div>
									{" "}
									End Hour:
									<input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} />
								</div>
								<button type="submit">Check</button>
							</Form>
							{/* {datesAvailable()} */}
						</Dropdown.Menu>
					</Dropdown>
				</ListGroup.Item>
			);
		});
	};
	return (
		<Container>
			<ListGroup variant="flush">{scheduler()}</ListGroup>

			{/* <p>{date}</p> */}
		</Container>
	);
};
