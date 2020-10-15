import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Image, Button, Row } from "react-bootstrap";
import noImage from "../../img/noimage.png";
import PropTypes from "prop-types";

export const ViewFile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log("params:", params);
	// console.log("filessss", store.files[params.singleId]);

	let filteredFile = store.files.filter(file => {
		return file.id == params.singleId;
	});
	console.log("filetered:", filteredFile);
	return (
		<>
			<Container>
				{filteredFile[0].file_upload !== null ? (
					<Image src={filteredFile[0].file_upload} fluid />
				) : (
					<Row>
						<Image src={noImage} fluid />
					</Row>
				)}
			</Container>
			<Link to="/main/music-room/student">
				<Button className="mt-2">Go back</Button>
			</Link>
		</>
	);
};
