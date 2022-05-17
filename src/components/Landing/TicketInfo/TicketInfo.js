import "./_TicketInfo.scss";

function TicketInfo() {
	return (
		<section className="ticket_info">
			<div>
				<div className="title">
					<h1>FooFest</h1>
					<p>A festival for everyone</p>
				</div>
				<p>21.06.2022 - 26.06.2022</p>

				<figure>
					<div className="regular">
						<h5>Regular</h5>
						<h5>799,-</h5>
					</div>
					<div className="vip">
						<h5>VIP</h5>
						<h5>1299,-</h5>
					</div>
				</figure>
				<a className="cta" href="/">
					Get your ticket now
				</a>
			</div>
		</section>
	);
}

export default TicketInfo;
