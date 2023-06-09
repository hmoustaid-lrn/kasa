import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Accomodation from './pages/Accomodation'

function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter basename="/kasa">
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						exact
						path="/accomodation/:accomodationId"
						element={<Accomodation />}
					/>

					<Route exact path="/about" element={<About />} />

					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default Router