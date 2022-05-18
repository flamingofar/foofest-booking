import "./_SingleArea.scss";

function SingleArea({ title, spots, spotsAvai }) {
	return (
		<li className="single_area">
			<div>
				<button className="choice_btn">-</button>
				<p>0</p>
				<button className="choice_btn">+</button>
			</div>
			<div>
				<p>
					<strong>{title}</strong>
				</p>
				<span>
					Available Spots: {spotsAvai}/{spots}
				</span>
			</div>
		</li>
	);
}

export default SingleArea;
