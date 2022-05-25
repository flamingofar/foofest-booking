import "./_Checkout.scss";

import { CheckoutFormProvider } from "../../context/CheckoutForm";

import { useEffect, useContext, useState } from "react";
import { OrderContext } from "../../context/Tickets";

import ContactInfo from "./ContactInfo/ContactInfo";
import Address from "./Address/Address";
import Pay from "./Pay/Pay";
import Nav from "../Nav/Nav";
import TicketTimer from "../TicketTimer/TicketTimer";
import TimerModal from "../TicketTimer/TimerModal/TimerModal";

import { useFormik } from "formik";
import * as Yup from "yup";

function Checkout() {
	const { order, setOrder } = useContext(OrderContext);
	const [time, setTime] = useState(240000);
	const [timeoutDone, setTimeoutDone] = useState(false);

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			country: "",
			street: "",
			city: "",
			zip: "",
			paymentMethod: "mobilepay",
			cardnumber: "",
			exp: "",
			cvc: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string().max(10, "Must be shorter than 10 characters").required("Required"),
			lastName: Yup.string().max(10, "Must be shorter than 10 characters").required("Required"),
			email: Yup.string().email().required("Required"),
			phone: Yup.number()
				.required()
				.positive("Can't be negative numbers")
				.integer()
				.min(8, "Must be longer than 8"),
			country: Yup.string().required("Required"),
			street: Yup.string().required("Required"),
			city: Yup.string().required("Required"),
			zip: Yup.number().required("Required"),
			//? PAYMENT
			cardname: Yup.number().min(16, "Must be 16 number").max(16, "Must be 16 numbers"),
			exp: Yup.string().min(5, "Must be 4 number").max(5, "Must be 4 numbers"),
			cvc: Yup.string().min(3, "Must be 3 number").max(3, "Must be 3 numbers"),
		}),
		onSubmit: () => {
			console.log(formik.values);
		},
	});

	useEffect(() => {
		const body = {
			reservationDuration: time,
		};

		const setSettings = async () => {
			const settings = await fetch("https://foofest-bananas.herokuapp.com/settings", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const response = await settings.json();
			console.log(response);
		};

		const putReservation = async () => {
			const body = {
				area: order.area,
				amount: order.guests.length,
			};
			console.log(JSON.stringify(body));

			const reservation = await fetch("https://foofest-bananas.herokuapp.com/reserve-spot", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const response = await reservation.json();
			console.log(response);
		};

		setSettings();
		putReservation();
	}, []);

	return (
		<main className="checkout" onSubmit={formik.handleSubmit}>
			<Nav />
			<TicketTimer timeStamp={time} timeoutDone={timeoutDone} setTimeoutDone={setTimeoutDone} />
			{timeoutDone && <TimerModal></TimerModal>}
			<CheckoutFormProvider>
				<form>
					<ContactInfo formik={formik} />
					<Address formik={formik} />
					<Pay formik={formik} />
				</form>
			</CheckoutFormProvider>
		</main>
	);
}

export default Checkout;
