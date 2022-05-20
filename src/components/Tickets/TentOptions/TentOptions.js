import "./_TentOptions.scss";
import { useContext, useState } from "react";
import { OrderContext } from "../../../context/Tickets";

function TentOptions() {
	const [tentOption, setTentOption] = useState(0);
	const { order, setOrder } = useContext(OrderContext);

	const checked = (e) => {
		setTentOption(e.target.value);
	};

	return (
		<section className="ticket_choice tent_choice">
			<h2>Choose your tent option</h2>
			<div>
				<fieldset>
					<input type="radio" name="tent_option" value={"own"} defaultChecked onChange={checked} />
					<p>
						<strong>Bring Own Tent</strong>
					</p>
				</fieldset>
				<fieldset>
					<input type="radio" name="tent_option" value={"pre"} onChange={checked} />
					<p>
						<strong>Crew Setup</strong>
					</p>
				</fieldset>
				<fieldset disabled={tentOption === "own" ? true : false}>
					<button className="choice_btn">-</button>
					<p>%</p>
					<button className="choice_btn">+</button>

					<p>
						<strong>2 person tent 299,-</strong>
					</p>
				</fieldset>
				<fieldset disabled={tentOption === "own" ? true : false}>
					<button className="choice_btn">-</button>
					<p>%</p>
					<button className="choice_btn">+</button>

					<p>
						<strong>3 person tent 399,</strong>
					</p>
				</fieldset>
				<fieldset>
					<input type="checkbox" />
					<p>
						<strong>Green Camping</strong>
					</p>
				</fieldset>
			</div>
		</section>
	);
}

export default TentOptions;
