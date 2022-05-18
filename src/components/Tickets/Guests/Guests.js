import SingleGuest from "./singleGuest/SingleGuest";
import "./_Guests.scss";
function Guests() {
	return (
		<section className="section_p guests">
			<h2>Who's gonna FooFest with you?</h2>
			<p>Please fill in information on your FooFriends</p>
			<ul>
				<SingleGuest number={1} />
				<SingleGuest number={2} />
				<SingleGuest number={3} />
			</ul>
		</section>
	);
}

export default Guests;
