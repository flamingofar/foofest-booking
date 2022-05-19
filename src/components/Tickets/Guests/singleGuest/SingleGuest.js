import "./_SingleGuest.scss";
function SingleGuest({ number, ticket }) {
	return (
		<li className="guest">
			<span>{number}</span>
			<form>
				<p>
					<strong>{ticket ? "VIP" : "Regular"}</strong>
				</p>
				<input type="text" placeholder="Full Name:" />
				<input type="email" placeholder="Mail" />
			</form>
		</li>
	);
}

export default SingleGuest;
