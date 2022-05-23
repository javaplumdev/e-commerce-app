import React, { useContext } from 'react';

import { contextProvider } from '../context/contextContainer';

function CartContainer() {
	const { finalCart, grandTotal } = useContext(contextProvider);

	return (
		<>
			<h1>Cart</h1>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				{finalCart.length >= 1 ? (
					<>
						{finalCart.map((item) => {
							return (
								<div key={item.id}>
									<div>
										<p>{item.name}</p>
										<p>{item.itemQty}</p>
									</div>
									<p>Product price: {item.price}</p>
									<p>Total price: {item.totalPrice}</p>
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
