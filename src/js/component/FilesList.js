//import react into the bundle
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomStudent.scss";
import profileImage from "../../img/profile.jpg";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";

import { MusicRoomTeacherUpFile } from "../component/musicRoomTeacherUpFile";

// react boostatrap
import { Button, ListGroup, Dropdown, Form, Nav } from "react-bootstrap";

export const FilesList = () => {
	const { store, actions } = useContext(Context);
	let { path, url } = useRouteMatch();
	let { account_type } = store.profile;
	let role = account_type.toLowerCase();
	const [check, setCheck] = useState(true);
	// let contacts = [
	// 	{
	// 		subject: "How to tune Guitar",
	// 		type: "Type: Video",
	// 		filter: "Guitar"
	// 	},
	// 	{
	// 		subject: "String notes on Guitar",
	// 		type: "Type: Video",
	// 		filter: "Guitar"
	// 	},
	// 	{
	// 		subject: "Notes on Piano",
	// 		type: "Type: Article",
	// 		filter: "Piano"
	// 	},
	// 	{
	// 		subject: "The Staff, Clefs and Ledger Lines",
	// 		type: "Type: Article",
	// 		filter: "Music Theory"
	// 	}
	// ];
	useEffect(() => {
		actions.getFiles();
	}, []);

	let teacherFiles = store.files.filter(file => {
		console.log(`${file.user_id}`, store.user.userId);
		return `${file.userId}` == store.user.userId;
	});

	console.log(store.files);
	return (
		<div className="container">
			<div className="row">
				{check ? (
					<div className="col">
						<h1>Music Room</h1>
						<br />

						<div className="container d-flex justify-content-center flex-column flex">
							<h2>Files</h2>
							<h6>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.{" "}
							</h6>
							<div className="video-container">
								<Form className="md-form">
									<Dropdown>
										<Dropdown.Toggle id="dropdown-basic">Filter by</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Level</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Language</Dropdown.Item>
											<Dropdown.Item href="#/action-3">Topic</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									<div>
										{teacherFiles.map((e, index) => {
											return (
												<ListGroup key={index}>
													<ListGroup.Item>
														<div className="row w-100">
															<div className="col-12 col-sm-6 col-md-3 px-0">
																<img
																	src={profileImage}
																	alt="Guitar"
																	className="rounded-circle mx-auto d-block img-fluid"
																/>
															</div>
															<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
																<div className=" float-right">
																	<button //changed
																		/*onClick={() =>
															props.history.push("/edit", {
																contact: e
															})
														}*/ className="btn">
																		<i className="fas fa-pencil-alt mr-3" />
																	</button>
																	<button
																		className="btn"
																		onClick={() => {
																			setModal(true);
																			// actions.deleteContact(e.id);
																		}}>
																		{/*// className="btn"
                                                    // onClick={() => {
                                                    // 	actions.deleteContact(e.id);
                                                    // }}>}
                                                    {/*we change props.onDelete actions.deleteContact(e.id)*/}
																		<i className="fas fa-trash-alt" />
																	</button>
																</div>
																<label className="name lead">{e.url}</label>{" "}
																{/*name, how is labeled at API*/}
																<br />
																<i className="text-muted mr-3" />
																<span className="text-muted">{e.typeFile}</span>{" "}
																{/*type, how is labeled at API*/}
																<br />
																<span
																	className="text-muted mr-3"
																	data-toggle="tooltip"
																	title=""
																	data-original-title="(870) 288-4149"
																/>
																<span className="text-muted small">{e.instrument}</span>{" "}
																{/*phone, how is labeled at API*/}
																<br />
															</div>
														</div>
													</ListGroup.Item>
												</ListGroup>
											);
										})}
									</div>
									{role == "teacher" ? (
										<div className="file-field-video  d-flex justify-content-center">
											<div className="btn btn-primary btn-sm float-left">
												{/* <Button>Post a File</Button> */}

												<Button
													onClick={() => {
														setCheck(false);
													}}>
													Post File
												</Button>
												{/* <span>Post a File </span> */}
												{/* <input type="file" /> */}
											</div>
											{/* <div className="file-path-wrapper">
								<input className="file-path validate" type="text" placeholder="Upload your file" />
							</div> */}
										</div>
									) : null}
								</Form>
							</div>
						</div>
					</div>
				) : (
					<div className="col">
						<MusicRoomTeacherUpFile check={check} setCheck={setCheck} />
					</div>
				)}
			</div>
		</div>
	);
};
