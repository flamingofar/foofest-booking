import "./_SingleArea.scss";

function SingleArea({ title, spots, spotsAvai, order, setOrder }) {
	const titleS = title.toLowerCase();
	// Check how many of the areas has been chosen
	const areaChoices = Object.values(order.area).reduce((a, b) => a + b);

	const handleArea = (e) => {
		if (e.target.innerHTML === "-") {
			if (order.area[titleS] !== 0) {
				setOrder((prev) => ({
					...prev,
					area: { ...prev.area, [titleS]: prev.area[titleS] - 1 },
				}));
			}
		} else if (e.target.innerHTML === "+") {
			// If all tickets have been placed on an area we can't incremenet
			if (areaChoices !== order.regular + order.vip) {
				setOrder((prev) => ({ ...prev, area: { ...prev.area, [titleS]: prev.area[titleS] + 1 } }));
			}
		}
	};

	return (
		<li className="single_area">
			<div>
				<button className="choice_btn" onClick={handleArea}>
					-
				</button>
				<p>{order.area[titleS]}</p>
				<button className="choice_btn" onClick={handleArea}>
					+
				</button>
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
