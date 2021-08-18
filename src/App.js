import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import E404 from './pages/E404/E404'
import Accomodation from './pages/Accomodation/Accomodation'

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="wrapper">
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/accomodations/:id">
							<Accomodation />
						</Route>
						<Route path="*">
							<E404 />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Fragment>
		)
	}
}

export default App
