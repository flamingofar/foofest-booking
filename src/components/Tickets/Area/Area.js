import SingleArea from "./SingleArea/SingleArea";
import { useContext } from "react";
import { AvailabilityContext } from "../../../context/Availabilty";
import { OrderContext } from "../../../context/Tickets";

import "./Area.scss";
function Area() {
	const { availability } = useContext(AvailabilityContext);
	const { order, setOrder } = useContext(OrderContext);
	const ticketAmount = order.vip + order.regular;
	//Object.values returns an array so we can use reduce method
	const ticketsLeft = ticketAmount - Object.values(order.area).reduce((a, b) => a + b);

	return (
		<section className="section_p">
			<h2>Where do you want to camp?</h2>
			<ul>
				{availability.map((area) => {
					return (
						<SingleArea
							key={area.id}
							title={area.area}
							spots={area.spots}
							spotsAvai={area.available}
							order={order}
							setOrder={setOrder}
						/>
					);
				})}
			</ul>
			<p>
				Tickets to be placed {ticketsLeft}/{ticketAmount}
			</p>
		</section>
	);
}

export default Area;
