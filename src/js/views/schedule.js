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

export const Schedule = () => {
	const { store, actions } = useContext(Context);
	let location = useLocation();
	// const timeAvailable = () => {
	// 	return store.teacher.availability.map((item, index) => {
	// 		return (
	// 			<Dropdown.Item key={index} href="#/action-1">
	// 				{item}
	// 			</Dropdown.Item>
	// 		);
	// 	});
	const scheduler = () => {
		return store.teacher.map((item, index) => {
			return (
				<ListGroup.Item key={index}>
					<Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							{item.name} - {item.instrument}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{/* {timeAvailable()} */}
							<Dropdown.Item href="#/action-1">{item.availability}</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</ListGroup.Item>
			);
		});
	};
	return <ListGroup variant="flush">{scheduler()}</ListGroup>;
};
