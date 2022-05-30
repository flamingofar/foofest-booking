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
import Basket from "../Basket/Basket";

function Tickets() {
	const { order } = useContext(OrderContext);
	const [linkActive, setLinkActive] = useState(false);

	useEffect(() => {
		const totalOrder = order.crewTents.twoPerson + order.crewTents.threePerson;
		console.log(totalOrder);
		const activateCheckout = () => {
			if (
				(totalOrder === order.guests.length && order.guests.length >= 1) ||
				(order.tentOption.bringOwn && order.guests.length >= 1)
			) {
				setLinkActive(true);
			} else {
				setLinkActive(false);
			}
		};
		activateCheckout();
	}, [JSON.stringify(order)]);
	return (
		<>
			<Nav />
			<main className="tickets-main">
				<section className="title ticket_choice">
					<h1>FooFest</h1>
					<p>A festival for everyone</p>
					<p>21.06.2022 - 26.06.2022</p>
				</section>
				<section>
					<TentsProvider>
						<TicketChoice />
						<Area />
						<Guests />
						<TentOptions />
					</TentsProvider>
				</section>
				<Basket linkActive={linkActive}></Basket>
				<Link to={"/checkout"} className={`mobile cta ${linkActive ? "disabled" : ""}`}>
					Checkout
				</Link>
			</main>
		</>
	);
}

export default Tickets;
