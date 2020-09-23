//import react into the bundle
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomStudent.scss";
import profileImage from "../../img/profile.jpg";

// react boostatrap
import { Button, ListGroup, Dropdown, Form } from "react-bootstrap";

export const MusicRoomStudent = () => {
	const { store, actions } = useContext(Context); //
	let contacts = [
		{
			subject: "How to tune Guitar",
			type: "Type: Video",
			filter: "Guitar"
		},
		{
			subject: "String notes on Guitar",
			type: "Type: Video",
			filter: "Guitar"
		},
		{
			subject: "Notes on Piano",
			type: "Type: Article",
			filter: "Piano"
		},
		{
			subject: "The Staff, Clefs and Ledger Lines",
			type: "Type: Article",
			filter: "Music Theory"
		}
	];
	return (
		<div>
			<h1>Music Room</h1>
			<br />

			<div className="container d-flex justify-content-center flex-column flex">
				<h2>Files</h2>
				<h6>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.{" "}
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
							{contacts.map((e, index) => {
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
													<label className="name lead">{e.subject}</label>{" "}
													{/*name, how is labeled at API*/}
													<br />
													<i className="text-muted mr-3" />
													<span className="text-muted">{e.type}</span>{" "}
													{/*type, how is labeled at API*/}
													<br />
													<span
														className="text-muted mr-3"
														data-toggle="tooltip"
														title=""
														data-original-title="(870) 288-4149"
													/>
													<span className="text-muted small">{e.filter}</span>{" "}
													{/*phone, how is labeled at API*/}
													<br />
												</div>
											</div>
										</ListGroup.Item>
									</ListGroup>
								);
							})}
						</div>

						<div className="file-field-video  d-flex justify-content-center">
							<div className="btn btn-primary btn-sm float-left">
								<Button>Post a File</Button>
								{/* <span>Post a File </span> */}
								{/* <input type="file" /> */}
							</div>
							{/* <div className="file-path-wrapper">
								<input className="file-path validate" type="text" placeholder="Upload your file" />
							</div> */}
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};
