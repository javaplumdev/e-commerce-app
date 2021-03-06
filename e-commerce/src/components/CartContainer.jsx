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
						<div className="d-flex align-items-center">
							<p>
								Cart <b>({cart.length} items)</b>
							</p>
						</div>
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
													<p>
														Item total price: <b>₱{item.totalPrice}</b>
													</p>
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
								<div
									className="sub-total w-100 d-flex align-items-center justify-content-between"
									style={{ height: '75px' }}
								>
									<div className="d-flex">
										Sub total: <h5 className="mx-2">₱{grandTotal}</h5>
									</div>
									<div className="me-4">
										<Button>Buy</Button>
									</div>
								</div>
							</>
						) : (
							<div className="h-100 d-flex align-items-center justify-content-center">
								<h4>No items added yet :(</h4>
							</div>
						)}
					</OffcanvasBody>
				</Offcanvas>
			</>
		</>
	);
}

export default CartContainer;
