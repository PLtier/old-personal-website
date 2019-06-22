import React, { Component } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import {
	Intrudction,
	AboutMe,
	Waywe,
	ThisPage
} from "../content/slides/slides";
import "../../../css/slider-handling-wrapper.scss";
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class DemoKeyboard extends Component {
	//this method sends output index out of component to change slide and sync with horizontalTimeline
	sendIndex = index => {
		this.props.outputIndex(index);
	};
	render() {
		return (
			<BindKeyboardSwipeableViews
				index={this.props.inputIndex}
				onChangeIndex={index => {
					//this method triggers when slide is
					//changed by basic events- swapping, 'arrows' or dragging.
					this.sendIndex(index);
				}}
				enableMouseEvents
			>
				{/**
				moveToSlide prop handles sending slide's index to 
				which you want to move from the current slide *by links and buttons.*
				*/}
				<article className="slide--text slide1">
					<Intrudction moveToSlide={this.sendIndex} />
				</article>
				<div className="slide--text slide2">
					<AboutMe />
				</div>
				<div className="slide--page slide3">
					<Waywe />
				</div>
				<div className="slide--page slide4">
					<ThisPage />
				</div>
			</BindKeyboardSwipeableViews>
		);
	}
}

export default DemoKeyboard;
