import React, { useContext } from 'react';

import { contextProvider } from '../context/contextContainer';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

function MarketContainer() {
	const { marketDataState } = useContext(contextProvider);

	return (
		<>
			{/* Special banner */}
			<div>
				<h1 className="fw-bold">
					Get the flashes <br></br>deal this rainy season.
				</h1>
			</div>
			<div className=" d-flex flex-wrap justify-content-center">
				{marketDataState.map((item) => {
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
		</>
	);
}

export default MarketContainer;
