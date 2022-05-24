import "./_Tickets.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TentsProvider } from "../../context/Tents";
import { OrderContext } from "../../context/Tickets";

import Nav from "../Nav/Nav";
import TicketChoice from "./TicketChoice/TicketChoice";
import Area from "./Area/Area";
import Guests from "./Guests/Guests";
import TentOptions from "./TentOptions/TentOptions";

function Tickets() {
	const { order } = useContext(OrderContext);
	const [linkActive, setLinkActive] = useState(false);

	const totalOrder = order.crewTents.twoPerson + order.crewTents.threePerson;

	useEffect(() => {
		if (order.tentOption.bringOwn && order.guests.length >= 1) {
			console.log("first");
			setLinkActive(true);
		} else if (order.crewTents.twoPerson + order.crewTents.threePerson === order.guests.length) {
			console.log("second");
			setLinkActive(true);
		} else {
			console.log("false");
			setLinkActive(false);
		}
		console.log(totalOrder);
	}, [order.tentOption.bringOwn, JSON.stringify(order.crewTents)]);
	return (
		<>
			<Nav />
			<main className="tickets-main">
				<div className="title ticket_choice">
					<h1>FooFest</h1>
					<p>A festival for everyone</p>
					<p>21.06.2022 - 26.06.2022</p>
				</div>
				<TentsProvider>
					<TicketChoice />
					<Area />
					<Guests />
					<TentOptions />
				</TentsProvider>
				<Link to={"/checkout"} className={`cta ${linkActive ? "" : "link-disabled"}`}>
					Checkout
				</Link>
			</main>
		</>
	);
}

export default Tickets;
