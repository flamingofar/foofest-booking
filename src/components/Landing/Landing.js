import { useContext, useEffect } from "react";
import { AvailabilityContext } from "../../context/Availabilty";

import LineUp from "./LineUp/LineUp";
import TicketInfo from "./TicketInfo/TicketInfo";
import InfoAside from "./InfoAside/InfoAside";
import Nav from "../Nav/Nav";

function Landing() {
	const { availability, setAvailability } = useContext(AvailabilityContext);

	useEffect(() => {
		const getAvailability = async () => {
			const JSON = await fetch("https://foofest-bananas.herokuapp.com/available-spots");
			const spotsData = await JSON.json();
			const spots = await spotsData.map((spot, idx) => ({ ...spot, id: idx + 1 }));

			setAvailability(spots);
		};
		getAvailability();
	}, []);

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

export default Landing;
