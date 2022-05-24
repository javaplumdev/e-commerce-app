import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { contextProvider } from '../context/contextContainer';

function ItemContainer() {
	const { marketDataState, increaseItemQty, decreaseItemQty, addToCart } =
		useContext(contextProvider);
	const { id } = useParams();

	return (
		<div className="d-flex justify-content-center w-100 ">
			{marketDataState.map((item) => {
				if (parseInt(id) === item.id) {
					return (
						<div key={item.id} className="d-flex flex-wrap w-100">
							<div style={{ width: '500px' }}>
								<img src={item.img} alt={item.name} className="img-fluid" />
							</div>
							<div>
								<p>{item.name}</p>
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									<button onClick={() => increaseItemQty(item.id)}>+</button>
									<p>{item.itemQty}</p>
									<button onClick={() => decreaseItemQty(item.id)}>-</button>
								</div>
								<button onClick={() => addToCart(item.id, item)}>
									Add to cart
								</button>
								<button>Buy now</button>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}

export default ItemContainer;
