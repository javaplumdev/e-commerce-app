import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { contextProvider } from '../context/contextContainer';

import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

function ItemContainer() {
	const {
		marketDataState,
		increaseItemQty,
		decreaseItemQty,
		addToCart,
		mouseHovered,
		onTop,
	} = useContext(contextProvider);
	const { id } = useParams();

	const filteredData = marketDataState.filter(
		(item) => item.id !== parseInt(id)
	);

	return (
		<div>
			<div className="d-flex justify-content-center w-100 ">
				{marketDataState.map((item) => {
					if (parseInt(id) === item.id) {
						return (
							<div
								key={item.id}
								className="d-flex flex-wrap justify-content-center w-100"
							>
								<div style={{ width: '500px' }}>
									<img
										src={item.img}
										alt={item.name}
										style={{
											width: '100%',
											height: '300px',
											objectFit: 'cover',
										}}
									/>
									<div className="my-3 d-flex justify-content-between flex-wrap">
										{item.hasOwnProperty('otherImages') ? (
											item.otherImages.map((image) => {
												return (
													<motion.img
														whileHover={{ scale: 1.1 }}
														className="me-2 cursor-pointer"
														onMouseOver={() => mouseHovered(image.image, item)}
														key={image.id}
														src={image.image}
														alt={image.image}
														style={{
															width: '150px',
															height: '150px',
															objectFit: 'cover',
														}}
													/>
												);
											})
										) : (
											<p>Doesn't have other images</p>
										)}
									</div>
								</div>
								<div style={{ width: '500px' }} className="mx-3">
									<h4>{item.name}</h4>
									<p className="fw-bold">${item.price}</p>
									<p>{item.description}</p>
									<div style={{ display: 'flex' }} className="my-3">
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
									<Button
										onClick={() => addToCart(item.id, item)}
										className="me-3"
										variant="outline-dark"
									>
										Add to cart
									</Button>
									<Button variant="dark">Buy now</Button>
								</div>
							</div>
						);
					}
				})}
			</div>

			<h5 className="mt-5 fw-bold">Check more items</h5>
			<div className=" d-flex flex-wrap">
				{filteredData.map((item) => {
					return (
						<motion.div
							whileHover={{ scale: 1.1 }}
							key={item.id}
							className="m-2"
							style={{ width: '250px' }}
						>
							<Link
								to={`/itemcontainer/${item.id}`}
								className="text-decoration-none text-dark"
							>
								<img
									src={item.img}
									alt={item.name}
									className="w-100"
									style={{ height: '200px', objectFit: 'cover' }}
									onClick={() => onTop()}
								/>
							</Link>
							<p>
								{item.name}
								<br></br>
								<b>${item.price}</b>
							</p>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default ItemContainer;
