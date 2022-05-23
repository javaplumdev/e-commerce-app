import React, { createContext, useState } from 'react';

import { marketData } from '../data/marketData';

export const contextProvider = createContext();

export function FuncContext({ children }) {
	const [marketDataState, setMarketDataState] = useState(marketData);
	const [itemQuantity, setItemQuantity] = useState(0);
	const [cart, setCart] = useState([]);

	function increaseItemQty(id) {
		marketDataState.map((item) => {
			if (id === item.id) {
				setItemQuantity(item.itemQty++);
				console.log(item);
			}
		});
	}

	function decreaseItemQty(id) {
		marketDataState.map((item) => {
			if (id === item.id) {
				if (itemQuantity < 1) {
					return 0;
				} else {
					setItemQuantity(item.itemQty--);
					console.log(item);
				}
			}
		});
	}

	const uniqueIds = [];
	function addToCart(product) {
		setCart((prevState) => [...prevState, product]);

		const unique = cart.filter((element) => {
			const isDuplicate = uniqueIds.includes(element.id);

			if (!isDuplicate) {
				uniqueIds.push(element.id);
				return true;
			}
			return false;
		});

		console.log(unique);
	}

	return (
		<contextProvider.Provider
			value={{
				marketDataState,
				increaseItemQty,
				itemQuantity,
				decreaseItemQty,
				addToCart,
			}}
		>
			{children}
		</contextProvider.Provider>
	);
}
