import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import profileImage from "../../img/profile.jpg";
import guitar from "../../img/guitar-avatar.jpg";
import piano from "../../img/piano-avatar.jpg";
import drums from "../../img/drums-avatar.jpg";
import violin from "../../img/violin-avatar.jpg";

export const TypeAvatar = props => {
	const [url, setUrl] = useState("");
	const { type, src } = props;

	useEffect(
		() => {
			getAvatar();
		},
		[type, src]
	);

	const getAvatar = () => {
		switch (type.toLowerCase()) {
			case "guitar":
				setUrl(guitar);
				break;
			case "piano":
				setUrl(piano);
				break;
			case "drums":
				setUrl(drums);
				break;
			case "violin":
				setUrl(violin);
				break;
			case "avatar":
				setUrl(src);
				break;
			default:
				setUrl(profileImage);
				break;
		}
	};

	return <Image src={url} alt={type} roundedCircle fluid className="mx-auto image-avatar-width" />;
};

TypeAvatar.defaultProps = {
	type: ""
};

TypeAvatar.propTypes = {
	type: PropTypes.string,
	src: PropTypes.string
};
