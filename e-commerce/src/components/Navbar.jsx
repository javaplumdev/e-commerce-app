import CartContainer from './CartContainer';

import { Link } from 'react-router-dom';

function NavbarComponent() {
	return (
		<div className="d-flex align-items-center justify-content-between py-3">
			<Link to="/" className="text-decoration-none text-dark ">
				<h5>Las Noches Store</h5>
			</Link>
			<CartContainer />
		</div>
	);
}

export default NavbarComponent;
