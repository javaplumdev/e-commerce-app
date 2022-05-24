import React, { useContext, useState } from 'react';

import { contextProvider } from '../context/contextContainer';

import { Button, Offcanvas, OffcanvasBody, Badge } from 'react-bootstrap';
import { BsCart, BsXCircle } from 'react-icons/bs';

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
						<Offcanvas.Title>
							Cart <small>({cart.length} items)</small>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<OffcanvasBody>
						{cart.length >= 1 ? (
							<>
								{cart.map((item) => {
									return (
										<div key={item.id} className="cart-items mt-2">
											<div className="mb-1 d-flex justify-content-between">
												<div>
													<h5>{item.name}</h5>
													<p>Item total price: ₱{item.totalPrice}</p>
												</div>
												<p className="fw-bolder fs-5">₱{item.price}</p>
											</div>
											<div className="d-flex justify-content-between align-items-center mb-3">
												<div className="d-flex ">
													<Button
														variant="outline-dark"
														onClick={() => increaseItemQty(item.id)}
														className="px-3"
													>
														+
													</Button>

													<h5 className="px-3">{item.itemQty}</h5>

													<Button
														variant="outline-dark"
														onClick={() => decreaseItemQty(item.id)}
														className="px-3"
													>
														-
													</Button>
												</div>

												<BsXCircle
													className="BsXCircle text-danger"
													size="1.4em"
													onClick={() => removeItem(item.id)}
												/>
											</div>
										</div>
									);
								})}
								<br></br>
								<div className="sub-total position-absolute bottom-0">
									<p>Grand total price: {grandTotal} </p>
								</div>
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
