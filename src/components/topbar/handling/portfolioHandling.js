import { Link } from "react-router-dom";
import React, { Component } from "react";
import Timeline from "./horizontalTimelineSetting";
import Slider from "./sliderHandlingWrapper";
import LinksContainer from "../content/links/linksContainer";

import "../../../css/portfolio-handling.scss";

class Portfolio extends Component {
	//state Index keeps current and previous slide.
	state = { current: 0 };
	//sendIndex
	//these methods provides sync between horizontalTimeline and slider and slide change
	changeIndexFromSlide = index => {
		this.setState({ current: index });
	};
	render() {
		return (
			<section className="sidebar">
				<div className="sidebar__timeline-slide">
					{/* Bounding box for the Timeline */}
					<div className="timeline-wrapper">
						<Timeline
							// //this is prop that sets slide's title
							index={this.state.current}
							//this sends index to change slide and sync with Slider
							indexClick={index => {
								this.setState({ current: index });
							}}
						/>
					</div>
					<div className="slider">
						<Slider
							//this is prop that sets slide
							inputIndex={this.state.current}
							//this sends index to change slide and sync with Timeline
							outputIndex={this.changeIndexFromSlide}
						/>
					</div>
				</div>
				<section className="more-information">
					<LinksContainer />
					<Link className="more-information__close-page" to="/">
						close sidebar
					</Link>
				</section>
			</section>
		);
	}
}

export default Portfolio;
