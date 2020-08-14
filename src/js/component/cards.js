import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = () => {
	const { store, actions } = useContext(Context);
	const makeCards = () => {
		return store.teacher.map((item, index) => {
			return (
				<div key={index} className="container">
					<div className="col-3">
						<div className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">{item.instrument}</p>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};
	return <div>{makeCards()}</div>;
};
