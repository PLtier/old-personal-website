import React from "react";
import Router from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
import PortfolioWrapper from "./components/topbar/handling/portfolioWrapper";
import Main from "./components/main components/main";
import SidebarAnimationWrapper from "./components/topbar/handling/sidebarAnimationSettings";
import ParticlesData from "./data-config/particles.config.json";
import { Particles } from "react-particles-js";
import "./css/gridStyles.scss";
import "./css/styles.scss";
import "./css/mobile.scss";
import "./css/slides.scss";

import "./css/libraries/press.css";
import "./css/libraries/normalize.css";

const App = () => {
	return (
		<div className="App">
			<Particles
				width={"100vw"}
				height={"100vh"}
				params={ParticlesData.configuration}
				style={ParticlesData.style}
			/>
			<Router id="router">
				<div>
					<div className="l-main-layout">
						<Main />
					</div>
					<SidebarAnimationWrapper />

					<Route path="/portfolio" component={PortfolioWrapper} />
				</div>
			</Router>
		</div>
	);
};
export default App;
