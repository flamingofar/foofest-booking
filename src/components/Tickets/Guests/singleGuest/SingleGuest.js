import { useContext, useState } from "react";
import { OrderContext } from "../../../../context/Tickets";
import "./_SingleGuest.scss";
function SingleGuest({ number, ticket, id }) {
	// console.log(id);

	const { order, setOrder } = useContext(OrderContext);
	const guestIdx = order.guests.findIndex((guest) => guest.id === id);

	const handleNameInput = (e) => {
		setOrder((prev) => {
			const newOrder = { ...prev };
			newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], name: e.target.value };

			return newOrder;
		});
	};
	const handleEmailInput = (e) => {
		setOrder((prev) => {
			const newOrder = { ...prev };
			newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: e.target.value };

			return newOrder;
		});
	};

	const test = (e) => {
		console.log(e);
	};

	return (
		<li className="guest">
			<span onClick={test}>{number}</span>
			<form>
				<p>
					<strong>{ticket ? "VIP" : "Regular"}</strong>
				</p>
				<input
					type="text"
					placeholder="Full Name:"
					value={order.guests[guestIdx].name}
					onChange={handleNameInput}
				/>
				<input
					type="email"
					placeholder="Mail"
					value={order.guests[guestIdx.email]}
					onChange={handleEmailInput}
				/>
			</form>
		</li>
	);
}

export default SingleGuest;
