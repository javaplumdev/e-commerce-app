import React from 'react';

import './App.css';

// Components
import MarketContainer from './components/MarketContainer';
import NavbarComponent from './components/Navbar';
import ItemContainer from './components/ItemContainer';
import Footer from './components/Footer';

import { FuncContext } from './context/contextContainer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<Router>
			<FuncContext>
				<div className="App container">
					<Toaster />
					<NavbarComponent />
					<Routes>
						<Route index path="/" element={<MarketContainer />} />
					</Routes>
					<Routes>
						<Route path="/itemcontainer/:id" element={<ItemContainer />} />
					</Routes>
				</div>
				<div style={{ backgroundColor: '#cad2c5' }}>
					<Footer />
				</div>
			</FuncContext>
		</Router>
	);
}

export default App;
