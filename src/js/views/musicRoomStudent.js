//import react into the bundle
import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomStudent.scss";

//include your index.scss file into the bundle
// import "../styles/index.scss";
//render your react application
// ReactDOM.render(<Layout />, document.querySelector("#app"));
//comment

const MusicRoomStudent = () => {
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
						<button className="topic-button">Filter by Topic</button>
						<button className="topic-button">Filter by Level</button>
						<button className="language-button">Filter by Language</button>

						<div>
							{contacts.map((e, index) => {
								return (
									<li key={index} className="list-group-item">
										<div className="row w-100">
											<div className="col-12 col-sm-6 col-md-3 px-0">
												<img
													src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fsimple-acoustic-guitar-silhouette-symbol-design-vector-20936710&psig=AOvVaw21JKsG_oQszpqDCW6LFaNc&ust=1599218053894000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCfldLtzOsCFQAAAAAdAAAAABAL"
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
