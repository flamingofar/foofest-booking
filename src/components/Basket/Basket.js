import "./_Basket.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

function Basket({ linkActive }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const windowWidth = useWindowWidth();

	const handleBasket = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		windowWidth < 768 ? setIsMobile(true) : setIsMobile(false);
		setIsOpen(false);

		console.log(windowWidth);
	}, [windowWidth]);

	return (
		<section className="basket">
			<p onClick={handleBasket}>Basket</p>

			{isMobile ? isOpen && isMobile && <BasketContent /> : <BasketContent />}

			<Link
				to={"/checkout"}
				className={`desktop_checkout cta ${linkActive ? "" : "link-disabled"}`}
			>
				Checkout
			</Link>
		</section>
	);
}

function BasketContent() {
	return (
		<div className="basket_content">
			<h4>Order:</h4>
			<ul>
				Tickets:
				<li>
					<div>
						<p>Regular Ticket x3</p>
						<span>á 3 x 799,-</span>
					</div>
					<p>9999,-</p>
				</li>
				<li>
					<div>
						<p>Vip Ticket x3</p>
						<span>á 3 x 799,-</span>
					</div>
					<p>9999,-</p>
				</li>
			</ul>
			<ul>
				Area:
				<li>
					<div>
						<p>Jotunheim</p>
						<span>Free</span>
					</div>
					<p>0,-</p>
				</li>
			</ul>
			<ul>
				Tent:
				<li>
					<div>
						<p>Bring Own Tent</p>
						<span>Free</span>
					</div>
					<p>0,-</p>
				</li>
				<li>
					<div>
						<p>Crew Setup - 2 person tent: 2</p>
						<span>á 3 x 399,-</span>
					</div>
					<p>9999,-</p>
				</li>
				<li>
					<div>
						<p>Crew Setup - 3 person tent: 3</p>
						<span>á 3 x 499,-</span>
					</div>
					<p>9999,-</p>
				</li>
				<li>
					<div>
						<p>Green Camping</p>
						<span>299,-</span>
					</div>
					<p>249,-</p>
				</li>
				<li></li>
			</ul>
			<ul>
				<li>
					<div>
						<p>Total</p>
					</div>{" "}
					<p>9999,-</p>
				</li>
			</ul>
		</div>
	);
}

export default Basket;
