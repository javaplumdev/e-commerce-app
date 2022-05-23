import React, { useContext } from 'react';

import { contextProvider } from '../context/contextContainer';

function CartContainer() {
	const { cart, grandTotal, increaseItemQty, decreaseItemQty, removeItem } =
		useContext(contextProvider);

	return (
		<>
			<h1>Cart</h1>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				{cart.length >= 1 ? (
					<>
						{cart.map((item) => {
							return (
								<div key={item.id}>
									<div>
										<p>{item.name}</p>
										<p>{item.itemQty}</p>
									</div>
									<div style={{ display: 'flex', justifyContent: 'center' }}>
										<button onClick={() => increaseItemQty(item.id)}>+</button>
										<p>{item.itemQty}</p>
										<button onClick={() => decreaseItemQty(item.id)}>-</button>
									</div>
									<p>Product price: {item.price}</p>
									<p>Total price: {item.totalPrice}</p>
									<button onClick={() => removeItem(item.id)}>
										Remove item
									</button>
								</div>
							);
						})}
						<br></br>
						<p>Grand total price: {grandTotal} </p>
					</>
				) : (
					<p>No items added yet :(</p>
				)}
			</div>
		</>
	);
}

export default CartContainer;
