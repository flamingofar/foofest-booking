import "./styles/main.scss";

import LineUp from "./components/Landing/LineUp/LineUp";
import TicketInfo from "./components/Landing/TicketInfo/TicketInfo";
import InfoAside from "./components/Landing/InfoAside/InfoAside";
import Nav from "./components/Nav/Nav";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Nav />
			<main>
				<TicketInfo />
				<LineUp />
				<InfoAside />
			</main>
		</>
	);
}

export default App;
