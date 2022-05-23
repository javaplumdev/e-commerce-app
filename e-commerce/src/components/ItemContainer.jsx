import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { contextProvider } from '../context/contextContainer';

function ItemContainer() {
	const { marketDataState, increaseItemQty, decreaseItemQty, addToCart } =
		useContext(contextProvider);
	const { id } = useParams();

	return (
		<>
			{marketDataState.map((item) => {
				if (parseInt(id) === item.id) {
					return (
						<div key={item.id}>
							<p>{item.name}</p>
							<div style={{ display: 'flex', justifyContent: 'center' }}>
								<button onClick={() => increaseItemQty(item.id)}>+</button>
								<p>{item.itemQty}</p>
								<button onClick={() => decreaseItemQty(item.id)}>-</button>
							</div>
							<button onClick={() => addToCart(item.id)}>Add to cart</button>
							<button>Buy now</button>
						</div>
					);
				}
			})}
		</>
	);
}

export default ItemContainer;
