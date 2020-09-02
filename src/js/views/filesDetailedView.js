//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
// import "../styles/index.scss";

//render your react application
// ReactDOM.render(<Layout />, document.querySelector("#app"));

//comment

export default function FilesDetailedView() {
	return (
		<div>
			<h1>File</h1>
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
