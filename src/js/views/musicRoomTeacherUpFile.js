//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/musicRoomTeacherUpFile.scss";

export default function MusicRoomTeacherUpFile() {
	return (
		<div>
			<h1>Music Room</h1>
			<br />
			<div className="containter d-flex justify-content-center">
				<h3>File Upload</h3>
			</div>
			<div className="containter d-flex justify-content-center">
				<form className="md-form">
					<div className="file-field-file">
						<div className="btn btn-primary btn-sm float-left">
							<span>File: </span>
							<input type="file" />
						</div>
						<div className="file-path-wrapper">
							<input className="comments-box file-path validate" type="text" placeholder="Comments..." />
						</div>
						<button className="cancel-button">Cancel</button>
						<button className="upload-button">Upload</button>
					</div>
				</form>
			</div>
		</div>
	);
}
