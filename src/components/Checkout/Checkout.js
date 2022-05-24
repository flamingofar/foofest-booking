import "./_Checkout.scss";

import { CheckoutFormProvider } from "../../context/CheckoutForm";

import ContactInfo from "./ContactInfo/ContactInfo";
import Address from "./Address/Address";
import Pay from "./Pay/Pay";
import Nav from "../Nav/Nav";
import TicketTimer from "../TicketTimer/TicketTimer";

import { useFormik } from "formik";
import * as Yup from "yup";

function Checkout() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			country: "",
			street: "",
			city: "",
			zip: "",
			// which payment
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
			exp: Yup.string().min(4, "Must be 4 number").max(4, "Must be 4 numbers"),
			cvc: Yup.string().min(3, "Must be 3 number").max(3, "Must be 3 numbers"),
		}),
		onSubmit: () => {
			console.log(formik.values);
		},
	});

	return (
		<main className="checkout" onSubmit={formik.handleSubmit}>
			<Nav />
			<TicketTimer />
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
