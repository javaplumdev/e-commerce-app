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

		var total = finalCart.reduce(function (prev, cur) {
			return prev + cur.totalPrice;
		}, 0);

		setGrandTotal(total);
	}

	function decreaseItemQty(id) {
		marketDataState.map((item) => {
			if (id === item.id) {
				if (itemQuantity <= 1) {
					return 0;
				} else {
					setItemQuantity(item.itemQty--);
					item.totalPrice = item.totalPrice - item.price;
				}
			}
		});

		var total = finalCart.reduce(function (prev, cur) {
			return prev + cur.totalPrice;
		}, 0);

		setGrandTotal(total);
	}

	const uniqueIds = [];
	function addToCart(id) {
		marketDataState.map((item) => {
			if (item.id === id) {
				setCart((prevState) => [...prevState, item]);
			}
		});

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

	function removeItem(id) {
		finalCart.map((item) => {
			return (item.itemQty = 0), (item.totalPrice = 0);
		});

		const filtered = finalCart.filter((element) => element.id !== id);
		setFinalCart(filtered);
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
				removeItem,
			}}
		>
			{children}
		</contextProvider.Provider>
	);
}
