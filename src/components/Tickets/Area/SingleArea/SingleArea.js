import "./_SingleArea.scss";

function SingleArea({ title, spots, spotsAvai, order, setOrder, area }) {
	return (
		<li className="single_area">
			<div>
				<input
					className="radio"
					type="radio"
					id={title}
					name="area"
					onChange={area.handleChange}
					value={title}
					defaultChecked={title === "Svartheim" ? true : false}
				/>
				<label className="radio_label" htmlFor={title}>
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
