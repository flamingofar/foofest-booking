import { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState({
		regular: 0,
		vip: 0,
		area: { svartheim: 0, nilfheim: 0, helheim: 0, muspelheim: 0, alfheim: 0 },
		guests: [],
		tentOption: {
			bringOwn: true,
			green: null,
			crewSetup: false,
		},
	});

	const value = {
		order,
		setOrder,
	};
	return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
