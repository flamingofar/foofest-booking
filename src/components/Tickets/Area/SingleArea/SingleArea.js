import "./_SingleArea.scss";

function SingleArea({ title, spots, spotsAvai, order, setOrder, area }) {
	return (
		<li className="single_area">
			<div>
				<input type="radio" id={title} name="area" onChange={area.handleChange} value={title} />
				{/* <button className="choice_btn" onClick={handleArea}>
					-
				</button>
				<p>{order.area[titleS]}</p>
				<button className="choice_btn" onClick={handleArea}>
					+
				</button> */}
			</div>
			<div>
				<label htmlFor={title}>
					<strong>{title}</strong>
				</label>
				<span>
					Available Spots: {spotsAvai}/{spots}
				</span>
			</div>
		</li>
	);
}

export default SingleArea;
