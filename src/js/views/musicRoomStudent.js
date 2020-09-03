//import react into the bundle
import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
// import "../styles/index.scss";
//render your react application
// ReactDOM.render(<Layout />, document.querySelector("#app"));
//comment

const MusicRoomStudent = () => {
	const { store, actions } = useContext(Context); //
	let contacts = [
		{
			full_name: "Johan",
			address: "Pembroke",
			phone: "123456",
			email: "johan@gmail.com"
		}
	];
	return (
		<div>
			<h1>Music Room</h1>
			<br />
			{/* <div className="container d-flex justify-content-center">
				
			</div> */}

			<div className="container d-flex justify-content-center flex-column flex">
				<h2>Files</h2>
				<h6>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.{" "}
				</h6>
				<div className="video-container">
					<form className="md-form">
						<button className="cancel-button">Filter by Topic</button>
						<button className="upload-button">Filter by Level</button>
						<button className="upload-button">Filter by Language</button>

						<div>
							{contacts.map((e, index) => {
								return (
									<li key={index} className="list-group-item">
										<div className="row w-100">
											<div className="col-12 col-sm-6 col-md-3 px-0">
												{/* <img
													src={MikePhoto}
													alt="Mike Anamendolla"
													className="rounded-circle mx-auto d-block img-fluid"
												/> */}
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
												<label className="name lead">{e.full_name}</label>{" "}
												{/*name, how is labeled at API*/}
												<br />
												<i className="fas fa-map-marker-alt text-muted mr-3" />
												<span className="text-muted">{e.address}</span>{" "}
												{/*address, how is labeled at API*/}
												<br />
												<span
													className="fa fa-phone fa-fw text-muted mr-3"
													data-toggle="tooltip"
													title=""
													data-original-title="(870) 288-4149"
												/>
												<span className="text-muted small">{e.phone}</span>{" "}
												{/*phone, how is labeled at API*/}
												<br />
												<span
													className="fa fa-envelope fa-fw text-muted mr-3"
													data-toggle="tooltip"
													data-original-title=""
													title=""
												/>
												<span className="text-muted small text-truncate">{e.email}</span>{" "}
												{/*email, how is labeled at API*/}
											</div>
										</div>
									</li>
								);
							})}
						</div>

						<div className="file-field-video  d-flex justify-content-center">
							<div className="btn btn-primary btn-sm float-left">
								<span>Upload a Video </span>
								<input type="file" />
							</div>
							<div className="file-path-wrapper">
								<input className="file-path validate" type="text" placeholder="Upload your file" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MusicRoomStudent;
