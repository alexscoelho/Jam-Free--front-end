import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

export const Cards = () => {
	const { store, actions } = useContext(Context);
	const makeCards = () => {
		return store.teacher.map((item, index) => {
			return (
				// <div key={index} className="col-12 col-sm-4 m-auto pb-2 info-col ">
				// 	<div className="card">
				// 		<img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
				// 		<div className="card-body">
				// 			<h5 className="card-title">{item.name}</h5>
				// 			<p className="card-text">{item.instrument}</p>
				// 		</div>
				// 	</div>
				// </div>
				<CardDeck key={index}>
					<Card
						className="col-12 col-sm-4 m-auto pb-2 info-col"
						style={{ width: "18rem" }}
						bg="secondary"
						text="white">
						<Card.Img variant="top" src="https://via.placeholder.com/214x160" />
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>
							<Card.Text>{item.instrument}</Card.Text>
						</Card.Body>
					</Card>
				</CardDeck>
			);
		});
	};
	return (
		<div className="container h-75 align-items-center mb-3 overflow-auto cards-wrapper ">
			{/* delete scrolling-wrapper row flex-row wrapper flex-nowrap pb-4 */}
			<div className="row d-md-flex scrolling-wrapper row flex-row wrapper flex-nowrap ">{makeCards()}</div>
			{/* <a className="mt-2 d-block text-center text-dark" href="#">
				View all lessons
			</a> */}
		</div>
	);
};
