import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = () => {
	const { store, actions } = useContext(Context);
	const makeCards = () => {
		return store.teacher.map((item, index) => {
			return (
				<div key={index} className="col-4">
					<div className="card">
						<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
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
		<div className="container  d-flex flex-column align-items-center">
			<div className="container  d-flex justify-content-center ">
				<div className="row ">{makeCards()}</div>
			</div>
			<a className="m-auto" href="#">
				View all lessons
			</a>
		</div>
	);
};
