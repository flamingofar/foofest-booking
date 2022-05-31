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
			<div className="credit_wrapper">
				<div className="input_wrapper">
					<div>
						<NumberFormat
							prefix="Rs."
							className={
								formik.values.paymentMethod === "mobilepay" ||
								formik.values.paymentMethod === "paypal"
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
					</div>
					<p className="error">
						{formik.touched.cardnumber && formik.errors.cardnumber && formik.errors.cardnumber}
					</p>
				</div>

				<div className="double_input">
					<div className="input_wrapper">
						<div>
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
						</div>
					</div>
					<p className="error">{formik.touched.exp && formik.errors.exp && formik.errors.exp}</p>

					<div className="input_wrapper">
						<div>
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
						</div>
						<p className="error">{formik.touched.cvc && formik.errors.cvc && formik.errors.cvc}</p>
					</div>
				</div>
			</div>
			<button type="submit" className="cta pay" disabled={!formik.isValid}>
				Pay
			</button>
		</fieldset>
	);
}

export default Pay;
