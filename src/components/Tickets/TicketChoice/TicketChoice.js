import "./_TicketChoice.scss";

function TicketChoice() {
	return (
		<section className="ticket_choice">
			<h2>Which ticket do you want?</h2>
			<div>
				<div>
					<div>
						<button className="choice_btn">-</button>
						<p>0</p>
						<button className="choice_btn">+</button>
					</div>
					<div>
						<p>
							<strong>Regular ticket</strong>
						</p>
					</div>
				</div>
				<div>
					<div>
						<button className="choice_btn">-</button>
						<p>0</p>
						<button className="choice_btn">+</button>
					</div>
					<div>
						<p>
							<strong>VIP ticket</strong>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TicketChoice;
