import "./_Address.scss";

function Address({ formik }) {
	return (
		<fieldset id="address" className="section_p">
			<h2>Where do you live?</h2>
			<div className="input_wrapper">
				<input
					type="text"
					id="country"
					name="country"
					placeholder="Country"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.country}
				/>
				{formik.touched.country && formik.errors ? <p>{formik.errors.country}</p> : null}
			</div>
			<div className="input_wrapper">
				<input
					type="text"
					id="street"
					name="street"
					placeholder="Streetname & No."
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.street}
				/>
				{formik.touched.street && formik.errors ? <p>{formik.errors.street}</p> : null}
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
						value={formik.values.city}
					/>
					{formik.touched.city && formik.errors ? <p>{formik.errors.city}</p> : null}
				</div>
				<div className="input_wrapper">
					<input
						type="text"
						id="zip"
						name="zip"
						placeholder="Zip Code"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.zip}
					/>
					{formik.touched.zip && formik.errors ? <p>{formik.errors.zip}</p> : null}
				</div>
			</div>
		</fieldset>
	);
}

export default Address;
