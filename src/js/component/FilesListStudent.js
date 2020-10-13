//import react into the bundle
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
import { FileCard } from "./FileCard";

export const FilesListStudent = () => {
	const { store, actions } = useContext(Context);
	let { path, url } = useRouteMatch();
	let { account_type } = store.profile;
	let role = account_type.toLowerCase();
	const [check, setCheck] = useState(true);
	const [fileAction, setFileAction] = useState("");
	const [filterType, setFilterType] = useState("");
	const [option, setOption] = useState("");
	const [favorites, setFavorites] = useState(false);

	console.log("user", store.user);
	console.log("files:", store.files);

	const handleClickSelect = e => {
		setOption(e.target.value);
		console.log(e.target.value);
	};

	const handleFilterChange = value => {
		setFilterType(value);
		setOption("");
	};

	return (
		<div className="container">
			<div className="row">
				{check ? (
					<div className="col">
						{/* <h1>Music Room</h1> */}
						<br />

						<div className="container d-flex justify-content-center flex-column flex">
							{/* <h2>Files</h2> */}
							{/* <h6>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.{" "}
							</h6> */}
							<div className="video-container overflow-auto">
								<Form className="">
									{role == "student" ? (
										<>
											<Dropdown>
												<Dropdown.Toggle id="dropdown-basic">Filter by</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item
														id="level"
														onClick={e => {
															handleFilterChange("Level");
														}}>
														Level
													</Dropdown.Item>
													<Dropdown.Item
														id="Language"
														onClick={e => {
															handleFilterChange("Language");
														}}>
														Language
													</Dropdown.Item>
													<Dropdown.Item
														id="Instrument"
														onClick={e => {
															handleFilterChange("Instrument");
														}}>
														Instrument
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
											<div className="form-group mt-2">
												{filterType !== "" ? (
													<>
														<label htmlFor="exampleFormControlSelect1">{filterType}</label>

														{filterType === "Level" ? (
															<select
																value={filterType}
																onChange={handleClickSelect}
																className="form-control"
																id="exampleFormControlSelect1">
																<option value="" selected>
																	Select a value
																</option>
																<option value="Intermediate">Intermediate</option>
																<option value="Advanced">Advanced</option>
															</select>
														) : filterType === "Language" ? (
															<select
																value={filterType}
																onChange={handleClickSelect}
																className="form-control"
																id="exampleFormControlSelect1">
																<option value="" selected>
																	Select a value
																</option>
																<option value="English">English</option>
																<option value="Spanish">Spanish</option>
															</select>
														) : (
															<select
																value={filterType}
																onChange={handleClickSelect}
																className="form-control"
																id="exampleFormControlSelect1">
																<option value="" selected>
																	Select a value
																</option>
																<option value="Guitar">Guitar</option>
																<option value="Drums">Drums</option>
																<option value="Piano">Piano</option>
																<option value="Violin">Violin</option>
																<option value="Bass">Bass</option>
															</select>
														)}
													</>
												) : null}
											</div>
										</>
									) : null}
									<div>
										{//studentFiles != undefined &&
										store.files
											.filter(file => file[filterType.toLowerCase()] === option || option === "")
											.map((e, index) => {
												return <FileCard key={index} index={index} e={e} role={role} />;
											})}
									</div>
									{role == "teacher" ? (
										<div className="file-field-video  d-flex justify-content-center">
											<div className="btn btn-primary btn-sm float-left">
												{/* <Button>Post a File</Button> */}

												<Button
													onClick={() => {
														setCheck(false);
														setFileAction("create");
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
						<MusicRoomTeacherUpFile
							check={check}
							setCheck={setCheck}
							teacherFiles={teacherFiles}
							fileAction={fileAction}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
