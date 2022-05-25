import { useContext, useEffect } from "react";
import { OrderContext } from "../../../../context/Tickets";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./_SingleGuest.scss";
function SingleGuest({ number, ticket, id }) {
	const guest = useFormik({
		initialValues: {
			name: "",
			email: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().min(5, "Please fill in full name").required("Full name is required"),
			email: Yup.string().email().required("Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
		validateOnMount: true,
	});

	const { order, setOrder } = useContext(OrderContext);
	const guestIdx = order.guests.findIndex((guest) => guest.id === id);

	useEffect(() => {
		const handleNameInput = () => {
			setOrder((prev) => {
				const newOrder = { ...prev };

				newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], name: guest.values.name };

				return newOrder;
			});
		};
		handleNameInput();
	}, [guest.values.name]);

	useEffect(() => {
		const handleEmailInput = () => {
			setOrder((prev) => {
				const newOrder = { ...prev };

				newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], email: guest.values.email };

				return newOrder;
			});
		};
		handleEmailInput();
	}, [guest.values.email]);

	useEffect(() => {
		setOrder((prev) => {
			const newOrder = { ...prev };

			newOrder.guests[guestIdx] = { ...newOrder.guests[guestIdx], isValid: guest.isValid };

			return newOrder;
		});
	}, [guest.isValid]);

	return (
		<li className="guest">
			<span>{number}</span>
			<form>
				<p>
					<strong>{ticket ? "VIP" : "Regular"}</strong>
				</p>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="Full Name:"
					// value={order.guests[guestIdx].name}
					value={guest.values.name}
					// onChange={handleNameInput}
					onChange={guest.handleChange}
					onBlur={guest.handleBlur}
				/>
				{<p>{guest.errors.name}</p>}
				<input
					id="email"
					type="email"
					name="email"
					placeholder="Mail"
					// value={order.guests[guestIdx.email]}
					value={guest.values.email}
					// onChange={handleEmailInput}
					onBlur={guest.handleBlur}
					onChange={guest.handleChange}
				/>
				{guest.touched.email && guest.errors.email && <p>{guest.errors.email}</p>}
			</form>
		</li>
	);
}

export default SingleGuest;
