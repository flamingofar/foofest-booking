import SingleArea from "./SingleArea/SingleArea";
import { useContext } from "react";
import { AvailabilityContext } from "../../../context/Availabilty";
import { OrderContext } from "../../../context/Tickets";

import "./Area.scss";
function Area() {
	const { availability } = useContext(AvailabilityContext);
	const { order, setOrder } = useContext(OrderContext);

	return (
		<section className="section_p">
			<h2>Where do you want to camp?</h2>
			<ul>
				{availability.map((area) => {
					return (
						<SingleArea
							key={area.id}
							id={area.id}
							title={area.area}
							spots={area.spots}
							spotsAvai={area.available}
							order={order}
							setOrder={setOrder}
						/>
					);
				})}
			</ul>
		</section>
	);
}

export default Area;
