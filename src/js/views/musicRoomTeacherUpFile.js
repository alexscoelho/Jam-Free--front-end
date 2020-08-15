//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
//include your index.scss file into the bundle
// import "../styles/index.scss";
//import your own components
import { Layout } from "./js/layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

export default function MusicRoomTeacher() {
	return (
		<div>
			<h1>Music Room</h1>
			<form className="md-form">
				<div className="file-field">
					<div className="btn btn-primary btn-sm float-left">
						<span>Choose file</span>
						<input type="file" />
					</div>
					<div className="file-path-wrapper">
						<input className="file-path validate" type="text" placeholder="Upload your file" />
					</div>
				</div>
			</form>
		</div>
	);
}
