import React, { useContext } from 'react';

import { contextProvider } from '../context/contextContainer';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

import banner from '../images/151-1512944_red-headphone-png-image-background-beats-by-dr-removebg-preview.png';

function MarketContainer() {
	const { marketDataState, onTop } = useContext(contextProvider);

	return (
		<>
			{/* Special banner */}
			<div
				className="banner-holder my-5 rounded d-flex"
				style={{ height: '320px', backgroundColor: '#cad2c5' }}
			>
				<div className="p-5" style={{ width: '460px' }}>
					<h2 className="fw-bold text-dark">{marketDataState[4].name}</h2>
					<p>{marketDataState[4].description}</p>
					<Link to={`/itemcontainer/${marketDataState[4].id}`}>
						<Button variant="dark">Check</Button>
					</Link>
				</div>

				<motion.img
					whileHover={{ scale: 1.1 }}
					src={banner}
					alt="banner"
					className="banner"
				/>
			</div>

			<h3 className="fw-bold">Hot items this season.</h3>
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
								onClick={() => onTop()}
							>
								<img
									src={item.img}
									alt={item.name}
									className="w-100"
									style={{ height: '200px', objectFit: 'cover' }}
								/>
							</Link>
							<p className="mt-2">
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
