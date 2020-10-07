import React, { useContext, useState } from "react";

import "../../styles/home.scss";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

// components
import { LeftCol } from "../component/left-col";
import { FilesListFavorites } from "./FilesListFavorites";

// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

export const MainProfile = () => {
	const { store, actions } = useContext(Context);
	let location = useLocation();
	let { account_type } = store.profile;
	let role = account_type.toLowerCase();

	const [showFavorites, setShowFavorites] = useState(false);

	console.log("profile:", store.profile);
	console.log("user:", store.user);

	return (
		<>
			<Container className="pt-3  profile-info-card ">
				<Row>
					<Col>
						<div className="profile-info">
							<h5 className="profile-field">Username</h5>
							<p>{store.profile.first_name}</p>
						</div>
						<div className="profile-info">
							<h5 className="profile-field">Instrument</h5>
							<p>{store.profile.instrument}</p>
						</div>
						<div className="profile-info">
							<h5 className="profile-field">Language</h5>
							<p>{store.profile.language}</p>
						</div>
					</Col>
					<Col>
						<div className="profile-info">
							<h5 className="profile-field">Email</h5>
							<p>{store.profile.email}</p>
						</div>
						<div className="profile-info">
							<h5 className="profile-field">Level</h5>
							<p>{store.profile.level}</p>
						</div>
						{/* <div className="profile-info">
						<h5 className="profile-field">Timezone</h5>
						<p>East</p>
					</div> */}
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="profile-info">
							<h5 className="profile-field">About Me</h5>
							<p>{store.profile.description}</p>
						</div>
					</Col>
				</Row>
			</Container>
			{role === "student" ? (
				<Button onClick={() => setShowFavorites(!showFavorites)} className="mt-2">
					Favorites{" "}
				</Button>
			) : null}
			{showFavorites ? <FilesListFavorites /> : null}
		</>
	);
};
