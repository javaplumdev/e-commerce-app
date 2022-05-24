import CartContainer from './CartContainer';

import { Link } from 'react-router-dom';

function NavbarComponent() {
	return (
		<div className="d-flex align-items-center justify-content-between py-3">
			<Link to="/">
				<p>Brand Logo</p>
			</Link>
			<CartContainer />
		</div>
	);
}

export default NavbarComponent;
