import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickets from "./components/Tickets/Tickets";

import App from "./App";
import Checkout from "./components/Checkout/Checkout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/tickets" element={<Tickets />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
