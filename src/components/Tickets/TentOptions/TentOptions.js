import "./_TentOptions.scss";
import { useContext, useState, useEffect } from "react";
import { OrderContext } from "../../../context/Tickets";
import { useFormik } from "formik";
import * as Yup from "yup";

function TentOptions() {
	const { order, setOrder } = useContext(OrderContext);

	// State for keeping track of first mount
	const [firstMount, setFirstMount] = useState(true);

	//Used for setting tent options to be or not disabled
	const [guestsValid, setGuestsValid] = useState(true);

	const [tentsToChoose, setTentsToChoose] = useState(0);

	const totalTickets = order.guests.length;
	const totalTentsChosen = order.crewTents.twoPerson + order.crewTents.threePerson;

	const tentOptions = useFormik({
		initialValues: {
			greenCamping: false,
			tent_option: "own",
		},
		validationSchema: Yup.object({}),
	});

	// Setting
	useEffect(() => {
		setTentsToChoose(order.guests.length || 1);
		setOrder((prev) => {
			const newOrder = { ...prev };
			// newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: e.target.value };
			newOrder.crewTents = { ...newOrder.crewTents, twoPerson: 0 };
			newOrder.crewTents = { ...newOrder.crewTents, threePerson: 0 };

			return newOrder;
		});
	}, [JSON.stringify(order.guests), order.tentOption.bringOwn]);

	const handleTwoPersonTent = (e) => {
		switch (e.target.innerHTML) {
			case "-":
				if (order.crewTents.twoPerson !== 0) {
					setOrder((prev) => {
						const newOrder = { ...prev };
						newOrder.crewTents = {
							...newOrder.crewTents,
							twoPerson: newOrder.crewTents.twoPerson - 1,
						};

						return newOrder;
					});
				}
				break;
			case "+":
				if (totalTickets !== totalTentsChosen) {
					console.log(order.crewTents.twoPerson % 2);
					setOrder((prev) => {
						const newOrder = { ...prev };
						newOrder.crewTents = {
							...newOrder.crewTents,
							twoPerson: newOrder.crewTents.twoPerson + 1,
						};

						return newOrder;
					});
				}
				break;

			default:
				break;
		}
	};
	const handleThreePersonTent = (e) => {
		console.log(e.target.innerHTML);
		switch (e.target.innerHTML) {
			case "-":
				if (order.crewTents.threePerson !== 0) {
					setOrder((prev) => {
						const newOrder = { ...prev };
						newOrder.crewTents = {
							...newOrder.crewTents,
							threePerson: newOrder.crewTents.threePerson - 1,
						};

						return newOrder;
					});
				}
				break;
			case "+":
				if (totalTickets !== totalTentsChosen) {
					setOrder((prev) => {
						const newOrder = { ...prev };
						newOrder.crewTents = {
							...newOrder.crewTents,
							threePerson: newOrder.crewTents.threePerson + 1,
						};

						return newOrder;
					});
				}
				break;

			default:
				break;
		}
	};

	//? Crew Setup tent choices
	useEffect(() => {
		setOrder((prev) => {
			const newOrder = { ...prev };
			// newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: e.target.value };
			newOrder.tentOption =
				tentOptions.values.tent_option === "own"
					? { ...newOrder.tentOption, bringOwn: true }
					: { ...newOrder.tentOption, bringOwn: false };

			return newOrder;
		});
	}, [tentOptions.values.tent_option]);
	// order.crewTents.twoPerson, order.crewTents.threePerson

	//? Set green camping to what the user chooses
	useEffect(() => {
		setOrder((prev) => {
			const newOrder = { ...prev };
			// newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: e.target.value };
			newOrder.tentOption = { ...newOrder.tentOption, green: tentOptions.values.greenCamping };

			return newOrder;
		});
	}, [JSON.stringify(tentOptions.values)]);

	//? Check if all guest inputs are valid
	useEffect(() => {
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
			if (order.guests.length === 0) {
				setGuestsValid(true);
				setOrder((prev) => {
					const newOrder = { ...prev };
					// newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: e.target.value };
					newOrder.crewTents = { ...newOrder.crewTents, twoPerson: 0 };
					newOrder.crewTents = { ...newOrder.crewTents, threePerson: 0 };

					return newOrder;
				});
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
					<input
						id="own"
						type="radio"
						name="tent_option"
						value={"own"}
						defaultChecked
						onChange={tentOptions.handleChange}
					/>
					<label htmlFor="own">
						<strong>Bring Own Tent</strong>
					</label>
				</fieldset>
				<fieldset>
					<input
						id="pre"
						type="radio"
						name="tent_option"
						value={"pre"}
						onChange={tentOptions.handleChange}
					/>
					<label htmlFor="pre">
						<strong>Crew Setup</strong>
					</label>
				</fieldset>
				<fieldset disabled={tentOptions.values.tent_option === "own" ? true : false}>
					<button className="choice_btn" onClick={handleTwoPersonTent}>
						-
					</button>
					<p>{order.crewTents.twoPerson}</p>
					<button className="choice_btn" onClick={handleTwoPersonTent}>
						+
					</button>

					<p>
						<strong>2 person tent 299,-</strong>
					</p>
				</fieldset>
				<fieldset disabled={tentOptions.values.tent_option === "own" ? true : false}>
					<button className="choice_btn" onClick={handleThreePersonTent}>
						-
					</button>
					<p>{order.crewTents.threePerson}</p>
					<button className="choice_btn" onClick={handleThreePersonTent}>
						+
					</button>

					<p>
						<strong>3 person tent 399,</strong>
					</p>
				</fieldset>
				<fieldset>
					<input
						id="greencamping"
						type="checkbox"
						name="greenCamping"
						onChange={tentOptions.handleChange}
					/>
					<label htmlFor="greencamping">
						<strong>Green Camping</strong>
					</label>
				</fieldset>
			</fieldset>
		</section>
	);
}

export default TentOptions;
