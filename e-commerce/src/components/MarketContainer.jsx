import React, { useContext } from 'react';

import { contextProvider } from '../context/contextContainer';

import { Link } from 'react-router-dom';

function MarketContainer() {
	const { marketDataState } = useContext(contextProvider);

	return (
		<div className="container d-flex flex-wrap">
			{marketDataState.map((item) => {
				return (
					<div key={item.id} className="marketContainer  m-2">
						<Link to={`/itemcontainer/${item.id}`}>
							<div className="marketContainer">
								<p>{item.name}</p>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default MarketContainer;
