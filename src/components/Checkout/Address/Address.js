import "./_Address.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

function Address() {
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
			<h2>Where do you live?</h2>
			<div className="input_wrapper">
				<input
					type="text"
					id="country"
					name="country"
					placeholder="Country"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.touched.email && formik.errors ? <p>{formik.errors.email}</p> : null}
			</div>
			<div className="input_wrapper">
				<input
					type="text"
					id="street"
					name="street"
					placeholder="Streetname & No."
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
						id="city"
						name="city"
						placeholder="City"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.firstName}
					/>
					{formik.touched.firstName && formik.errors ? <p>{formik.errors.firstName}</p> : null}
				</div>
				<div className="input_wrapper">
					<input
						type="text"
						id="zip"
						name="zip"
						placeholder="Zip Code"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.lastName}
					/>
					{formik.touched.lastName && formik.errors ? <p>{formik.errors.lastName}</p> : null}
				</div>
			</div>
		</fieldset>
	);
}

export default Address;
