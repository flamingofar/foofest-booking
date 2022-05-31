import "./_Pay.scss";
import { useEffect } from "react";
import NumberFormat from "react-number-format";
function Pay({ formik }) {
	useEffect(() => {
		console.log(formik);
	}, [formik]);

	return (
		<fieldset className="section_p">
			<h2>How are you paying?</h2>
			<div className="payment">
				<input
					type="radio"
					value="mobilepay"
					id="mobilepay"
					name="paymentMethod"
					onChange={formik.handleChange}
				/>
				<input
					defaultChecked
					type="radio"
					value="creditcard"
					id="creditcard"
					name="paymentMethod"
					onChange={formik.handleChange}
				/>
				<input
					type="radio"
					value="paypal"
					id="paypal"
					name="paymentMethod"
					onChange={formik.handleChange}
				/>
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
				<NumberFormat
					prefix="Rs."
					className={
						formik.values.paymentMethod === "mobilepay" || formik.values.paymentMethod === "paypal"
							? "disabled"
							: ""
					}
					allowEmptyFormatting
					format="#### #### #### ####"
					mask="x"
					type="text"
					id="cardnumber"
					name="cardnumber"
					placeholder="Card Number"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.cardnumber}
					onValueChange={(values) => {
						const { value } = values;
						formik.setFieldValue("cardnumber", value);
					}}
				></NumberFormat>
				{formik.touched.cardnumber && formik.errors ? <p>{formik.errors.cardnumber}</p> : null}
			</div>

			<div className="double_input">
				<div className="input_wrapper">
					<NumberFormat
						className={
							formik.values.paymentMethod === "mobilepay" ||
							formik.values.paymentMethod === "paypal"
								? "disabled"
								: ""
						}
						format="##/##"
						placeholder="MM/YY"
						mask={["M", "M", "Y", "Y"]}
						type="text"
						id="exp"
						name="exp"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.exp}
						onValueChange={(values) => {
							const { value } = values;
							formik.setFieldValue("exp", value);
						}}
					/>
					{formik.touched.exp && formik.errors ? <p>{formik.errors.exp}</p> : null}
				</div>
				<div className="input_wrapper">
					<input
						className={
							formik.values.paymentMethod === "mobilepay" ||
							formik.values.paymentMethod === "paypal"
								? "disabled"
								: ""
						}
						type="text"
						id="cvc"
						name="cvc"
						placeholder="CVC"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.cvc}
					/>
					{formik.touched.cvc && formik.errors ? <p>{formik.errors.cvc}</p> : null}
				</div>
			</div>
			<button type="submit" className="cta" disabled={!formik.isValid}>
				Pay
			</button>
		</fieldset>
	);
}

export default Pay;
