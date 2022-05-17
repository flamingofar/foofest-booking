import "./_Tickets.scss";

import { useFormik } from "formik";
import * as Yup from "yup";

function Tickets() {
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
		<form onSubmit={formik.handleSubmit}>
			<div>
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
			<div>
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
			<div>
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
			<button type="su mit">Submit</button>
		</form>
	);
}

export default Tickets;
