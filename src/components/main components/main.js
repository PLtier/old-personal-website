import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/myLogo.PNG";
import "../../css/main.scss";

export default () => (
	<main className="c-main">
		<img className="c-main__img" src={Logo} alt="logo" />

		<header className="c-main__header">
			<strong>Maciej </strong>
			<strong>Jałocha</strong>
			<br />
			<span className="c-main__tagline">Programmer & young entrepreneur.</span>
		</header>

		<article className="c-main__text">
			I'm 15 years old man from Poland who's passion's business, programming -
			mainly web development - and self-development. I've already started to
			create my first websites since I was 12 years old. Currently I'm launching
			my first startup - Waywe. If you have similar interests or do you want to
			learn more about me
			<Link className="o-link" to="/portfolio">
				{" "}
				enter here
			</Link>
		</article>

		<nav className="c-main__nav">
			<Link to="/portfolio" className="c-main__button">
				<button className="c-main__button press press-green press-round press-ghost">
					Portfolio
				</button>
			</Link>
		</nav>
	</main>
);
