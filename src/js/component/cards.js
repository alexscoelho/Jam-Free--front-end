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
				<div key={index} className="col-12 col-sm-4 m-auto pb-2 info-col ">
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
		<div className="container h-75 align-items-center  mb-3 overflow-auto cards-wrapper">
			{/* <div className="d-flex justify-content-center "> */}
			<div className="row d-md-flex">{makeCards()}</div>
			{/* </div> */}
			<a className="mt-2 d-block text-center" href="#">
				View all lessons
			</a>
		</div>
	);
};
