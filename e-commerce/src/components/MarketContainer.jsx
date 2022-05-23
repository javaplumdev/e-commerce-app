import React, { useContext } from 'react';

import { contextProvider } from '../context/contextContainer';

import { Link } from 'react-router-dom';

function MarketContainer() {
	const { marketDataState } = useContext(contextProvider);

	return (
		<>
			{marketDataState.map((item) => {
				return (
					<Link key={item.id} to={`/itemcontainer/${item.id}`}>
						<div className="marketContainer">
							<p>{item.name}</p>
						</div>
					</Link>
				);
			})}
		</>
	);
}

export default MarketContainer;
