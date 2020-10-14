import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Image } from "react-bootstrap";
import PropTypes from "prop-types";

export const ViewFile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	console.log("params:", params);
	return (
		<Container>
			{store.files[params.singleId].file_upload !== null ? (
				<Image src={store.files[params.singleId].file_upload} />
			) : (
				<div>No image found</div>
			)}
		</Container>
	);
};
