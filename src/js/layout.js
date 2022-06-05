import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { HomeCharacters } from "./views/home";
import { Planetas } from "./views/planetas";
import { Vehilces} from "./views/vehilces";
import { DetalleCharacters } from "./views/detallecharacters";
import { DetallePlaneta } from "./views/detalleplaneta";
import { DetalleVehicles } from "./views/detallevehicles";

import injectContext from "./store/appContext";
import NotFound from "./views/NotFound";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Vehicles from "./component/Vehicles";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<HomeCharacters />
						</Route>
						<Route exact path="/planetas">
							<Planetas />
						</Route>
						<Route exact path="/vehicles">
							<Vehicles />
						</Route>
						<Route exact path="/detallecharacters/:id">
							<DetalleCharacters />
						</Route>
						<Route exact path="/detalleplaneta/:id">
							<DetallePlaneta />
						</Route>
						<Route exact path="/detallevehicles/:id">
							<DetalleVehicles  />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
