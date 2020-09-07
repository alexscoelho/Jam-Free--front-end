import React, { useContext } from "react";
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

export const Schedule = () => {
	const { store, actions } = useContext(Context);
	let location = useLocation();

	// function to generate each item on the list (teachers)
	const scheduler = () => {
		return store.teacher.map((item, index) => {
			// function to loop thru availability array in teacher object
			const datesAvailable = () => {
				return item.availability.map((dates, index) => {
					return (
						<Dropdown.Item key={index} href="#/action-1">
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label={dates} />
							</Form.Group>
						</Dropdown.Item>
					);
				});
			};
			return (
				<ListGroup.Item key={index}>
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							{item.name} - {item.instrument}
						</Dropdown.Toggle>
						<Dropdown.Menu>{datesAvailable()}</Dropdown.Menu>
					</Dropdown>
				</ListGroup.Item>
			);
		});
	};
	return <ListGroup variant="flush">{scheduler()}</ListGroup>;
};
