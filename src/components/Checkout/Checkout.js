import "./_Checkout.scss";

import { CheckoutFormProvider } from "../../context/CheckoutForm";

import { useNavigate } from "react-router-dom";
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
	const navigate = useNavigate();
	const { order, setOrder } = useContext(OrderContext);
	const [time, setTime] = useState(240000);
	const [timeoutDone, setTimeoutDone] = useState(false);
	const [reservationNr, setReservationNr] = useState("");
	const [response, setResponse] = useState("");

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
			const body = {
				id: reservationNr,
			};

			const fullfillReservation = async () => {
				const settings = await fetch("https://foofest-bananas.herokuapp.com/fullfill-reservation", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(body),
				});
				const response = await settings.json();
				console.log(response);
				await setResponse(response.message);
			};
			fullfillReservation();
			saveBooking({
				reservationNr: reservationNr,
				area: order.area,
				vip: order.vip,
				regular: order.regular,
				guests: order.guests,
				greenCamping: order.tentOption.green,
				bringOwn: order.tentOption.bringOwn,
				crewTwoPerson: order.crewTents.twoPerson,
				crewThreePerson: order.crewTents.threePerson,
			});
		},
	});

	useEffect(() => {
		if (response === "Reservation completed") {
			setResponse("");
			navigate("/confirmation");
		} else {
			console.log("NOPE");
		}
	}, [response]);

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

			const reservation = await fetch("https://foofest-bananas.herokuapp.com/reserve-spot", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});
			const response = await reservation.json();
			await setReservationNr(response.id);
		};

		setSettings();
		putReservation();
	}, []);

	const saveBooking = async (booking) => {
		const JSONData = await fetch("https://cocktails-2d4e.restdb.io/rest/foofest", {
			async: true,
			crossDomain: true,
			url: "https://cocktails-2d4e.restdb.io/rest/foofest",
			method: "post",
			body: JSON.stringify(booking),
			headers: {
				"content-type": "application/json",
				"x-apikey": "6138eab743cedb6d1f97ee7b",
				"cache-control": "no-cache",
			},
		});

		const res = await JSONData.json();
		console.log(res);
	};

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
