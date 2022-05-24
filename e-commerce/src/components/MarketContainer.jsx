import React, { useContext } from 'react';

import { contextProvider } from '../context/contextContainer';

import { Link } from 'react-router-dom';

function MarketContainer() {
	const { marketDataState } = useContext(contextProvider);

	return (
		<>
			{/* Special image  */}
			<div>
				<h1 className="fw-bold">
					Get the flashes <br></br>deal this rainy season.
				</h1>
			</div>
			<div className=" d-flex flex-wrap justify-content-center">
				{marketDataState.map((item) => {
					return (
						<div key={item.id} className="marketContainer m-3">
							<Link to={`/itemcontainer/${item.id}`}>
								<div className="marketContainer">
									<img
										src={item.img}
										alt={item.name}
										className="img-fluid"
										style={{ height: '200px' }}
									/>
									<p>{item.name}</p>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default MarketContainer;
