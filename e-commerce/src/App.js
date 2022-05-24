import React, { useContext } from 'react';

import './App.css';

// Components
import MarketContainer from './components/MarketContainer';
import CartContainer from './components/CartContainer';
import ItemContainer from './components/ItemContainer';

import { FuncContext } from './context/contextContainer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<Router>
			<FuncContext>
				<div className="App">
					<Toaster />
					<Routes>
						<Route
							index
							path="/"
							element={
								<>
									<MarketContainer />
									<CartContainer />
								</>
							}
						/>
					</Routes>
					<Routes>
						<Route
							path="/itemcontainer/:id"
							element={
								<>
									<ItemContainer />
									<CartContainer />
								</>
							}
						/>
					</Routes>
				</div>
			</FuncContext>
		</Router>
	);
}

export default App;
