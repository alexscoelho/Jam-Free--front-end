import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Cards = () => {
	const { store, actions } = useContext(Context);
	const makeCards = () => {
		return store.teacher.map((item, index) => {
			return (
				<div key={index} className="col-4">
					<div className="card">
						<img src="https://via.placeholder.com/200" className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{item.instrument}</p>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div className="container d-flex flex-column h-75 align-items-center mt-5 mb-5">
			<div className="d-flex justify-content-center ">
				<div className="row ">{makeCards()}</div>
			</div>
			<a className="mt-2" href="#">
				View all lessons
			</a>
		</div>
	);
};
