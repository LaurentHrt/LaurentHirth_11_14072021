import './styles/App.css'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import E404 from './pages/E404'
import Accomodation from './pages/Accomodation'

class App extends React.Component {
	render() {
		return (
			<Fragment>
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
				<Footer />
			</Fragment>
		)
	}
}

export default App
