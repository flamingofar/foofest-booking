import "./_TicketChoice.scss";
import { useContext } from "react";
import { OrderContext } from "../../../context/Tickets";

function TicketChoice() {
	const { order, setOrder } = useContext(OrderContext);

	const handleRegular = (e) => {
		if (e.target.innerHTML === "-") {
			if (order.regular !== 0) {
				setOrder((prev) => ({ ...prev, regular: prev.regular - 1 }));
			}
		} else if (e.target.innerHTML === "+") {
			setOrder((prev) => ({ ...prev, regular: prev.regular + 1 }));
		}
	};
	const handleVIP = (e) => {
		if (e.target.innerHTML === "-") {
			if (order.vip !== 0) {
				setOrder((prev) => ({ ...prev, vip: prev.vip - 1 }));
			}
		} else if (e.target.innerHTML === "+") {
			setOrder((prev) => ({ ...prev, vip: prev.vip + 1 }));
		}
	};

	return (
		<section className="ticket_choice">
			<h2>Which ticket do you want?</h2>
			<div>
				<div>
					<div>
						<button className="choice_btn" onClick={handleRegular}>
							-
						</button>
						<p>{order.regular}</p>
						<button className="choice_btn" onClick={handleRegular}>
							+
						</button>
					</div>
					<div>
						<p>
							<strong>Regular ticket</strong>
						</p>
					</div>
				</div>
				<div>
					<div>
						<button className="choice_btn" onClick={handleVIP}>
							-
						</button>
						<p>{order.vip}</p>
						<button className="choice_btn" onClick={handleVIP}>
							+
						</button>
					</div>
					<div>
						<p>
							<strong>VIP ticket</strong>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TicketChoice;
