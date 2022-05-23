import React, { createContext, useState } from 'react';

import { marketData } from '../data/marketData';

export const contextProvider = createContext();

export function FuncContext({ children }) {
	const [marketDataState, setMarketDataState] = useState(marketData);
	const [itemQuantity, setItemQuantity] = useState(0);
	const [cart, setCart] = useState([]);
	const [grandTotal, setGrandTotal] = useState(0);

	const [finalCart, setFinalCart] = useState([]);

	function increaseItemQty(id) {
		marketDataState.map((item) => {
			if (id === item.id) {
				setItemQuantity(item.itemQty++);
				item.totalPrice = item.price * item.itemQty;
			}
		});

		setGrandTotal(
			cart.map((item) => item.totalPrice).reduce((prev, curr) => prev + curr, 0)
		);
	}

	function decreaseItemQty(id) {
		marketDataState.map((item) => {
			if (id === item.id) {
				if (itemQuantity < 1) {
					return 0;
				} else {
					setItemQuantity(item.itemQty--);
					item.totalPrice = item.totalPrice - item.price;
				}
			}
		});

		setGrandTotal(
			cart.map((item) => item.totalPrice).reduce((prev, curr) => prev + curr, 0)
		);
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

		setFinalCart(unique);
	}

	return (
		<contextProvider.Provider
			value={{
				marketDataState,
				increaseItemQty,
				itemQuantity,
				decreaseItemQty,
				addToCart,
				finalCart,
				grandTotal,
			}}
		>
			{children}
		</contextProvider.Provider>
	);
}
