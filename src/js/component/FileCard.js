import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomStudent.scss";
import profileImage from "../../img/profile.jpg";
import { TypeAvatar } from "./typeAvatar";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";

import { MusicRoomTeacherUpFile } from "./musicRoomTeacherUpFile";

// react boostatrap
import { Button, ListGroup, Dropdown, Form, Nav, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const FileCard = ({ e, index, role, lessons, lessonId }) => {
	const { store, actions } = useContext(Context);

	// let lessons = store.files || store.favorites;

	let { path, url } = useRouteMatch();
	let checkFavorites = store.favorites.filter(favorite => {
		return favorite.id === e.id;
	});
	const [favorites, setFavorites] = useState(checkFavorites.length > 0 ? true : false);
	// add to favorites
	const handleClick = id => {
		setFavorites(!favorites);

		let singleFileObject = null;

		// filter files array to match id with the id been mapped
		let singleFile = store.files.filter(file => {
			if (file.id === id) {
				return file;
			}
		});

		// deleting the array outside object
		singleFileObject = singleFile[0];

		// push object to favorites array if does not exist
		if (!store.favorites.some(favorite => favorite.id === singleFileObject.id)) {
			store.favorites.push(singleFileObject);
			// console.log(store.favorites);
			actions.setMessage({
				visible: true,
				type: "success",
				heading: "Success!",
				errorMessage: "You added a favorite, go to your profile to se it"
			});
		} else {
			let filterFavorites = store.favorites.filter(favorite => {
				return favorite.id != e.id;
			});
			store.favorites = filterFavorites;
			actions.setMessage({
				visible: true,
				type: "danger",
				heading: "Success!",
				errorMessage: "Favorite deleted"
			});
			console.log(store.favorites, "eliminado ", id);
		}

		console.log("file", singleFileObject.id);
		console.log("favorite", store.favorites);
	};
	return (
		<ListGroup key={index}>
			<ListGroup.Item action variant="light" as="a">
				<div className="row w-100 ml-0">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<TypeAvatar type={e.instrument} />
					</div>

					<div className="col-12 col-sm-6 col-md-9 text-center pr-0 text-sm-left">
						<div className=" float-right">
							{role == "teacher" ? (
								<Row className="align-items-center">
									<Col xs={6}>
										<Button
											onClick={e => {
												e.preventDefault();
												setCheck(false);
												setFileAction("edit");
												setTargetFile(index);
											}}>
											<i className="fas fa-pencil-alt" />
										</Button>
									</Col>
									<Col xs={6}>
										<Button
											onClick={() => {
												handleClick(e.id);
											}}>
											<i className="fas fa-trash-alt" />
										</Button>
									</Col>
								</Row>
							) : null}
						</div>
						<div className="list-info-wrapper">
							<label className="name lead d-flex">{e.title}</label>{" "}
							<span
								onClick={() => {
									handleClick(e.id);
								}}
								className="float-right">
								{favorites ? (
									<i className="fas fa-bookmark favorite" />
								) : (
									<i className="far fa-bookmark favorite" />
								)}
							</span>
							<br />
							<label>{"Teacher:"}</label>
							<br />
							<label className="name lead">{e.instrument}</label> {/*name, how is labeled at API*/}
							<br />
							<span className="text-muted">{e.level}</span>
							<br />
							<span className="text-muted">{e.language}</span> {/*type, how is labeled at API*/}
							<br />
							{lessons[index].url !== "" ? (
								<div className="view-file-button">
									<Button as="a" href={e.url} target="_blank" className="view-file action-button">
										View Video
									</Button>
								</div>
							) : (
								<Link to={`/main/music-room/${role}/file/${index}`}>
									<Button className="action-button">View Image</Button>
								</Link>
							)}
							<span
								className="text-muted mr-3"
								data-toggle="tooltip"
								title=""
								// data-original-title="(870) 288-4149"
							/>
						</div>
						<br />
					</div>
				</div>
			</ListGroup.Item>
		</ListGroup>
	);
};

FileCard.propTypes = {
	e: PropTypes.any,
	index: PropTypes.any,
	role: PropTypes.any,
	lessons: PropTypes.any,
	lessonId: PropTypes.any
};
