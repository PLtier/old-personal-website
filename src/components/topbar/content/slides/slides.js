import React, { Fragment } from "react";
import PageSlide from "./pageSlideTemplate";
import WaywePhoto from "../../../../images/pageScreenShot.png";
import PortfolioPhoto from "../../../../images/portfolioScreenShot.png";
const Intrudction = props => {
	return (
		<Fragment>
			<h1 className="slide__headline">Everything you should now</h1>
			<p className="slide__text">
				Here you can find my portfiolio and my achievements. An the top are
				chronologically placed my "posts" To change slides you can swipe, drag
				and use arrows.
			</p>
			<h3>
				<a
					href="javascript:void(0)"
					onClick={e => {
						props.moveToSlide(1);
						e.preventDefault();
					}}
				>
					About Me
				</a>
			</h3>
			<h3>Portfolio - Main Projects</h3>
			<ul>
				<li>
					<a
						href="javascript:void(0)"
						onClick={e => {
							props.moveToSlide(2);
							e.preventDefault();
						}}
					>
						Waywe Start-up Page
					</a>
				</li>
				<li>
					<a
						href="javascript:void(0)"
						onClick={e => {
							props.moveToSlide(3);
							e.preventDefault();
						}}
					>
						This portfiolio
					</a>
				</li>
			</ul>
			<p className="slide__text">
				For more check my other work in platforms which i linked, especially
				Github.
			</p>
		</Fragment>
	);
};

const AboutMe = () => {
	return (
		<Fragment>
			<h1 className="slide__headline">Something About Me</h1>
			<h2 className="slide__headline">15 years old man?!</h2>
			<p className="slide__text">
				Yes. At the age of 12 i read Trump's book <em>Midas Touch</em> which
				changed my way of looking at the world. Since then, I have understood
				how many opportunites people have, including me. So I started to learn
				programming and business, but mainly self-development.
			</p>
			<br />
			<p className="slide__text">
				Currently I'm comfortable with javascript (including es6 features),
				Css3, Html and ReactJS. Probably my next target is NodeJS.
				<br /> I'm member of Master Group of Web Programming in the Youth Palace
				of Warsaw. Also I'm member of WoXes Jazz band and founder of Waywe
				startup.
			</p>
		</Fragment>
	);
};

const Waywe = () => {
	return (
		<Fragment>
			<PageSlide
				img={WaywePhoto}
				alt={"logo"}
				link={"https://wayweapp.com"}
				repoLink={"https://github.com/PLtier/waywe-page-startup"}
				text={
					<Fragment>
						<h1 className="slide__headline">Waywe</h1>
						<p className="slide__text slide--page__text">
							{" "}
							This is my first commercial project i created. The page purpose is
							to validate my startup idea - Waywe app. It has been created with
							html, scss and VanillaJS. I plan to use React or Vue to create
							better version.
						</p>
					</Fragment>
				}
			/>
		</Fragment>
	);
};

const ThisPage = () => {
	return (
		<Fragment>
			<PageSlide
				img={PortfolioPhoto}
				alt={"logo"}
				link={"https://maciejjalocha.com"}
				repoLink={"https://github.com/PLtier/personal-page"}
				text={
					<Fragment>
						<h1 className="slide__headline">About Me Page</h1>
						<p className="slide__text slide--page__text">
							{" "}
							This is my About Me / Portfolio Page. It was created using React,
							SCss and a lot of dependencies. The most interesting thing is
							animated router, which I'm very fond of.
						</p>
					</Fragment>
				}
			/>
		</Fragment>
	);
};

export { Intrudction, AboutMe, Waywe, ThisPage };
