import SingleGuest from "./singleGuest/SingleGuest";
import "./_Guests.scss";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../../context/Tickets";
function Guests() {
	const { order, setOrder } = useContext(OrderContext);

	return (
		<section className="section_p guests">
			<h2>Who's gonna FooFest with you?</h2>
			<p>Please fill in information on your FooFriends</p>
			<ul>
				{order.guests.map((guest, idx) => {
					return <SingleGuest number={idx + 1} ticket={guest.vip} />;
				})}
			</ul>
		</section>
	);
}

export default Guests;
