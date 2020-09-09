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
	const [date, checkDate] = useState(store.teacher[0].availability);
	let location = useLocation();
	const handleSubmit = e => {
		e.preventDefault();
		checkDate(store.checkAvailabity);
	};

	// function to generate each item on the list (teachers)
	const scheduler = () => {
		return store.teacher.map((item, index) => {
			// function to loop thru availability array in teacher object
			// const datesAvailable = () => {
			// 	return item.availability.map((dates, index) => {
			// 		return (
			// 			<Dropdown.Item key={index} href="#/action-1">
			// 				<Form.Group controlId="formBasicCheckbox">
			// 					<Form.Check type="checkbox" label={dates} />
			// 				</Form.Group>
			// 			</Dropdown.Item>
			// 		);
			// 	});
			// };
			return (
				<ListGroup.Item key={index}>
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							{item.name} - {item.instrument}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Form onSubmit={handleSubmit}>
								<input type="date" onChange={e => checkDate(e.target.value)} />
								<button type="submit">Check</button>
								{/* <input type="submit" /> */}
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
