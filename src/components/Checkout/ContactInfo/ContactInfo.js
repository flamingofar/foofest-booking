import "./_ContactInfo.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useContext } from "react";
import { CheckoutFormContext } from "../../../context/CheckoutForm";

function ContactInfo() {
	const { setAddressActive } = useContext(CheckoutFormContext);

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
		<fieldset className="section_p">
			<h2>Who's placing the order?</h2>
			<div className="input_wrapper">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
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
						id="firstName"
						name="firstName"
						placeholder="First name"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>
					{formik.touched.firstName && formik.errors ? <p>{formik.errors.firstName}</p> : null}
				</div>
				<div className="input_wrapper">
					<input
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Last name"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
					{formik.touched.lastName && formik.errors ? <p>{formik.errors.lastName}</p> : null}
				</div>
			</div>
			<div className="input_wrapper">
				<input
					type="phone"
					id="phone"
					name="phone"
					placeholder="Phone"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors ? <p>{formik.errors.email}</p> : null}
			</div>
		</fieldset>
	);
}

export default ContactInfo;
