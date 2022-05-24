import "./_Pay.scss";
function Pay({ formik }) {
	return (
		<fieldset className="section_p">
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
					value={formik.values.cardnumber}
				/>
				{formik.touched.cardnumber && formik.errors ? <p>{formik.errors.cardnumber}</p> : null}
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
						value={formik.values.exp}
					/>
					{formik.touched.exp && formik.errors ? <p>{formik.errors.exp}</p> : null}
				</div>
				<div className="input_wrapper">
					<input
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
			<button type="submit" className="cta" disabled={formik.isValid}>
				Pay
			</button>
		</fieldset>
	);
}

export default Pay;
