import "./_SingleGuest.scss";
function SingleGuest({ number }) {
	return (
		<li className="guest">
			<span>{number}</span>
			<form>
				<input type="text" placeholder="Full Name:" />
				<input type="email" placeholder="Mail" />
			</form>
		</li>
	);
}

export default SingleGuest;
