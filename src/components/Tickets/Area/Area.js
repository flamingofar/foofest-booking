import SingleArea from "./SingleArea/SingleArea";

import "./Area.scss";
function Area() {
	return (
		<section className="section_p">
			<h2>Where do you want to camp?</h2>
			<ul>
				<SingleArea title={"Svartheim"} spots={400} spotsAvai={291} />
				<SingleArea title={"NilfHeim"} spots={300} spotsAvai={2} />
				<SingleArea title={"Helheim"} spots={100} spotsAvai={84} />
				<SingleArea title={"Muspelheim"} spots={200} spotsAvai={61} />
				<SingleArea title={"Alfheim"} spots={250} spotsAvai={84} />
			</ul>
		</section>
	);
}

export default Area;
