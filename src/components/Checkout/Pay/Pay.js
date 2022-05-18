import { useFormik } from "formik";
import * as Yup from "yup";

import { useContext } from "react";
import { CheckoutFormContext } from "../../../context/CheckoutForm";

import "./_Pay.scss";
function Pay() {
	const { payActive } = useContext(CheckoutFormContext);

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string().max(10, "Must be shorter than 10 characters").required("Required"),
			lastName: Yup.string().max(10, "Must be shorter than 10 characters").required("Required"),
			email: Yup.string().email().required("Required"),
		}),
		onSubmit: () => {
			console.log(formik.values);
		},
	});
	return (
		<fieldset className="section_p" disabled={payActive ? true : false}>
			<h2>How are you paying?</h2>
			<div className="payment">
				<input type="radio" id="mobilepay" name="payment" defaultChecked />
				<input type="radio" id="creditcard" name="payment" />
				<input type="radio" id="paypal" name="payment" />
				<label htmlFor="mobilepay" className="mobilepay">
					Mobile Pay
				</label>
				<label htmlFor="creditcard" className="creditcard">
					Credit Card
				</label>
				<label htmlFor="paypal" className="paypal">
					PayPal
				</label>
			</div>
			<div className="input_wrapper">
				<input
					type="text"
					id="cardnumber"
					name="cardnumber"
					placeholder="Card Number"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors ? <p>{formik.errors.email}</p> : null}
			</div>

			<div className="double_input">
				<div className="input_wrapper">
					<input
						type="text"
						id="exp"
						name="exp"
						placeholder="Exp. Date"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>
					{formik.touched.firstName && formik.errors ? <p>{formik.errors.firstName}</p> : null}
				</div>
				<div className="input_wrapper">
					<input
						type="text"
						id="cvc"
						name="cvc"
						placeholder="CVC"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
					{formik.touched.lastName && formik.errors ? <p>{formik.errors.lastName}</p> : null}
				</div>
			</div>
			<button type="submit" className="cta">
				Pay
			</button>
		</fieldset>
	);
}

export default Pay;
