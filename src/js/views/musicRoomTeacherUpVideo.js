//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomTeacherUpVideo.scss";

//render your react application
// ReactDOM.render(<Layout />, document.querySelector("#app"));

export default function MusicRoomTeacher() {
	return (
		<div>
			<h1>Music Room</h1>
			<br />
			{/* <div className="container d-flex justify-content-center">
				
			</div> */}

			<div className="container d-flex justify-content-center flex-column">
				<h3>Video Upload</h3>
				<div className="video-container">
					<form className="md-form">
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
}
