import "./_Tickets.scss";

import { useState } from "react";

import Nav from "../Nav/Nav";
import TicketChoice from "./TicketChoice/TicketChoice";
import Area from "./Area/Area";
import Guests from "./Guests/Guests";
import TentOptions from "./TentOptions/TentOptions";

function Tickets() {
	const [ticketsChosen, setTicketsChosen] = useState(false);
	const [areaChosen, setAreaChosen] = useState(false);
	const [guestsChosen, setGuestsChosen] = useState(false);
	const [tentsChosen, setTentsChosen] = useState(false);

	return (
		<>
			<Nav />
			<main>
				<div className="title ticket_choice">
					<h1>FooFest</h1>
					<p>A festival for everyone</p>
					<p>21.06.2022 - 26.06.2022</p>
				</div>
				<TicketChoice ticketsChosen={ticketsChosen} setTicketsChosen={setTicketsChosen} />
				<Area areaChosen={areaChosen} setAreaChosen={setAreaChosen} />
				<Guests guestsChosen={guestsChosen} setGuestsChosen={setGuestsChosen} />
				<TentOptions tentsChosen={tentsChosen} setTentsChosen={setTentsChosen} />
			</main>
		</>
	);
}

export default Tickets;
