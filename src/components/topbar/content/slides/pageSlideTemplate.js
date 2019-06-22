import React, { Fragment } from "react";

export default props => {
	return (
		<Fragment>
			<figure className="slide__img-figure">
				<a href={props.link}>
					<img
						src={props.img}
						alt={props.alt}
						className="slide__img"
						style={{
							widht: "100%",
							height: "auto",
							maxWidth: "100%",
							maxHeight: "100%"
						}}
					/>
				</a>
			</figure>
			<div className="slide__text-wrapper slide--text">
				{props.text}
				<a href={props.repoLink}>
					<button className="slide--page__button press press-green press-round press-ghost">
						Check Github Repository
					</button>
				</a>
			</div>
		</Fragment>
	);
};
