import { Link } from "react-router-dom";
import "./_Nav.scss";

function Nav() {
	return (
		<nav>
			<Link to={"/"}>FooFest</Link>
			<p>21.06.2022 - 26.06.2022</p>
		</nav>
	);
}

export default Nav;
