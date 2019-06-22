import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => (
	<a
		href={props.link}
		className="links-container__link press press-round press-ghost press-green"
	>
		<FontAwesomeIcon icon={props.icon} size="lg" className="link__img" />
		<div>{props.text}</div>
	</a>
);
