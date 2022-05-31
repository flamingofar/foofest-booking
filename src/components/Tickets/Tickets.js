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
import Basket from "./Basket/Basket";
import InfoPane from "../InfoPane/InfoPane";

function Tickets() {
	const { order } = useContext(OrderContext);
	const [linkActive, setLinkActive] = useState(false);

	//Used for setting tent options and checkout button to be or not disabled
	const [guestsValid, setGuestsValid] = useState(true);

	useEffect(() => {
		const totalOrder = order.crewTents.twoPerson + order.crewTents.threePerson;
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
				<InfoPane />
				<section>
					<TentsProvider>
						<TicketChoice />
						<Area />
						<Guests />
						<TentOptions setGuestsValid={setGuestsValid} guestsValid={guestsValid} />
					</TentsProvider>
				</section>
				<Basket
					linkActive={linkActive}
					setGuestsValid={setGuestsValid}
					guestsValid={guestsValid}
				></Basket>
				<Link to={"/checkout"} className={`mobile cta ${guestsValid ? "disabled" : ""}`}>
					Checkout
				</Link>
			</main>
		</>
	);
}

export default Tickets;
