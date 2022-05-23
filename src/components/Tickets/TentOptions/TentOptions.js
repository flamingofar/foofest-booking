import "./_TentOptions.scss";
import { useContext, useState, useEffect } from "react";
import { OrderContext } from "../../../context/Tickets";
import { useFormik } from "formik";

function TentOptions() {
	const { order, setOrder } = useContext(OrderContext);

	// State for keeping track of first mount
	const [firstMount, setFirstMount] = useState(true);
	// State for keeping track of coice between own tent or crew setup
	const [tentOption, setTentOption] = useState("own");
	//Used for setting tent options to be or not disabled
	const [guestsValid, setGuestsValid] = useState(true);

	const checked = (e) => {
		setTentOption(e.target.value);
	};

	useFormik({
		initialValues: {
			checked: "",
		},
	});

	useEffect(() => {
		// Check if all guest inputs are valid
		const checkGuestValidity = () => {
			// Getting all guests that are not valid
			const notValid = order.guests.filter((guest) => guest.isValid !== true);
			// Check for first mount
			if (firstMount === true) {
				setFirstMount(false);
				return;
			} else {
				//  If there are not valid guests, set state to false
				if (notValid.length > 0) {
					setGuestsValid(true);
					// If there are no not valid guests set state to false
				} else if (notValid.length < 1) {
					setGuestsValid(false);
				}
			}
		};

		checkGuestValidity();
		// https://www.gosink.in/react-js-how-to-render-useeffect-only-once/
	}, [JSON.stringify(order.guests)]);

	return (
		<section className="ticket_choice tent_choice" disabled={guestsValid}>
			<h2>Choose your tent option</h2>
			<fieldset disabled={guestsValid}>
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
			</fieldset>
		</section>
	);
}

export default TentOptions;
