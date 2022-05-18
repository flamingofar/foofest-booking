import "./_Checkout.scss";
import {  ,useState } from "react";

import ContactInfo from "./ContactInfo/ContactInfo";
import Address from "./Address/Address";
import Pay from "./Pay/Pay";
import Nav from "../Nav/Nav";
import TicketTimer from "../TicketTimer/TicketTimer";



function Checkout() {
	const [addressActive, setAdressActive] = useState(false);
	const [payActive, setPayActive] = useState(false);

	return (
		<main className="checkout">
			<Nav />
			<TicketTimer />
			<form>
				<ContactInfo />
				<Address />
				<Pay />
				<button type="submit" className="cta ">
					Pay
				</button>
			</form>
		</main>
	);
}

export default Checkout;
