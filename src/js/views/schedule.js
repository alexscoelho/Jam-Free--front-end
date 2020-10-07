import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";
import { AppointsmentsDetails } from "../component/AppointmentsDetail";

// react bootstrap
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Schedule = () => {
	// state for storing checking and storing available dates
	const { store, actions } = useContext(Context);
	// const [date, checkDate] = useState(store.teacher[0].availability);
	let { account_type } = store.profile;
	let role = account_type.toLowerCase();

	const [date, setDate] = useState();
	const [startTime, setStartTime] = useState();
	const [endTime, setEndTime] = useState();
	let appointmentStartTime = `${date}T${startTime}Z`;
	let appointmentEndTime = `${date}T${endTime}Z`;

	let location = useLocation();

	async function handleSubmit(e, index) {
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

		let req = await actions.createAppointment(appointment);

		if (req.response === true) {
			actions.setMessage({
				visible: true,
				type: "success",
				heading: "Success!",
				errorMessage: req.msg
			});
		} else {
			actions.setMessage({
				visible: true,
				type: "danger",
				heading: "Ooops!",
				errorMessage: "Please try again later"
			});
		}

		// checkDate(store.checkAvailabity);
	}

	// function to generate each item on the list (teachers)
	const scheduler = () => {
		return store.teacher.map((item, index) => {
			return (
				<ListGroup.Item key={index} action variant="light">
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							{item.name} - {item.instrument}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Form onSubmit={e => handleSubmit(e, index)}>
								<div className="title-selector">
									Date:
									<input value={date} type="date" onChange={e => setDate(e.target.value)} required />
								</div>
								<div className="title-selector">
									{" "}
									Start Hour:
									<input
										type="time"
										value={startTime}
										onChange={e => setStartTime(e.target.value)}
										required
									/>
								</div>
								<div className="title-selector">
									{" "}
									End Hour:
									<input
										type="time"
										value={endTime}
										onChange={e => setEndTime(e.target.value)}
										required
									/>
								</div>
								{/* <button type="submit">Check</button> */}
								<Button type="submit" block>
									Check
								</Button>
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
			{role == "student" && (
				<Row>
					<Col>
						<h4>Set up an appointment</h4>
						<ListGroup variant="flush">{scheduler()}</ListGroup>
					</Col>
				</Row>
			)}
			<Row className="mt-4">
				{/* <p>{date}</p> */}
				<Col>
					<h4>This week schedule</h4>

					<AppointsmentsDetails />
				</Col>
			</Row>
		</Container>
	);
};
