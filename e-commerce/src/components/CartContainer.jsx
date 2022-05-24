import React, { useContext, useState } from 'react';

import { contextProvider } from '../context/contextContainer';

import { Button, Offcanvas, OffcanvasBody, Badge } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';

function CartContainer() {
	const {
		cart,
		grandTotal,
		increaseItemQty,
		decreaseItemQty,
		removeItem,
		show,

		handleClose,
		handleShow,
	} = useContext(contextProvider);

	return (
		<>
			<>
				<Button variant="outline-dark" className="p-2" onClick={handleShow}>
					<BsCart size="1.5em" />{' '}
					<Badge bg="danger" className="rounded-circle">
						{cart.length}
					</Badge>
				</Button>
				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Offcanvas</Offcanvas.Title>
					</Offcanvas.Header>
					<OffcanvasBody>
						{cart.length >= 1 ? (
							<>
								{cart.map((item) => {
									return (
										<div key={item.id}>
											<div>
												<p>{item.name}</p>
												<p>{item.itemQty}</p>
											</div>
											<div
												style={{ display: 'flex', justifyContent: 'center' }}
											>
												<button onClick={() => increaseItemQty(item.id)}>
													+
												</button>
												<p>{item.itemQty}</p>
												<button onClick={() => decreaseItemQty(item.id)}>
													-
												</button>
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
					</OffcanvasBody>
				</Offcanvas>
			</>
		</>
	);
}

export default CartContainer;
