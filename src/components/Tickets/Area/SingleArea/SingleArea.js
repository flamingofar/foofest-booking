import "./_SingleArea.scss";

function SingleArea({ title, spots, spotsAvai, order, setOrder, id }) {
	const titleS = title.toLowerCase();

	const handleArea = (e) => {
		if (e.target.innerHTML === "-") {
			if (order.area[titleS] !== 0) {
				setOrder((prev) => ({ ...prev, area: { ...prev.area, [titleS]: prev.area[titleS] - 1 } }));
			}
		} else if (e.target.innerHTML === "+") {
			setOrder((prev) => ({ ...prev, area: { ...prev.area, [titleS]: prev.area[titleS] + 1 } }));
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
