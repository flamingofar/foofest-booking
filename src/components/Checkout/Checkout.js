import "./_Checkout.scss";

import { CheckoutFormProvider } from "../../context/CheckoutForm";

import ContactInfo from "./ContactInfo/ContactInfo";
import Address from "./Address/Address";
import Pay from "./Pay/Pay";
import Nav from "../Nav/Nav";
import TicketTimer from "../TicketTimer/TicketTimer";

function Checkout() {
	return (
		<main className="checkout">
			<Nav />
			<TicketTimer />
			<CheckoutFormProvider>
				<form>
					<ContactInfo />
					<Address />
					<Pay />
				</form>
			</CheckoutFormProvider>
		</main>
	);
}

export default Checkout;
