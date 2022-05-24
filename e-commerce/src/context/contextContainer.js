import React, { createContext, useState } from 'react';

import { marketData } from '../data/marketData';

export const contextProvider = createContext();

export function FuncContext({ children }) {
	const [marketDataState, setMarketDataState] = useState(marketData);
	const [itemQuantity, setItemQuantity] = useState(0);
	const [cart, setCart] = useState([]);
	const [grandTotal, setGrandTotal] = useState(0);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function increaseItemQty(id) {
		marketDataState.map((item) => {
			if (id === item.id) {
				setItemQuantity(item.itemQty++);
				item.totalPrice = item.price * item.itemQty;
			}
		});

		var total = cart.reduce(function (prev, cur) {
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

		var total = cart.reduce(function (prev, cur) {
			return prev + cur.totalPrice;
		}, 0);

		setGrandTotal(total);
	}

	function addToCart(id, product) {
		const isItemExist = cart.find((item) => item.id === id);

		if (isItemExist) {
			console.log('Item already added');
		} else {
			marketDataState.map((item) => {
				if (id === item.id) {
					setItemQuantity(item.itemQty++);

					item.totalPrice = item.price * item.itemQty;
				}
			});

			setCart((prevState) => [...prevState, product]);
			setGrandTotal(
				(prevState) => prevState + product.totalPrice * product.itemQty
			);
		}
	}

	function removeItem(id) {
		cart.map((item) => {
			if (item.id === id) {
				return (item.itemQty = 0), (item.totalPrice = 0);
			}
		});

		const filtered = cart.filter((element) => element.id !== id);
		setCart(filtered);

		var total = cart.reduce(function (prev, cur) {
			return prev + cur.totalPrice;
		}, 0);

		setGrandTotal(total);
	}

	return (
		<contextProvider.Provider
			value={{
				marketDataState,
				increaseItemQty,
				itemQuantity,
				decreaseItemQty,
				addToCart,
				cart,
				grandTotal,
				removeItem,
				show,
				setShow,
				handleClose,
				handleShow,
			}}
		>
			{children}
		</contextProvider.Provider>
	);
}
