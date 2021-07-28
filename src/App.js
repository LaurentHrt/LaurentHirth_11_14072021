import './styles/App.css'

import Header from './containers/Header.js'
import Footer from './containers/Footer.js'
import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import E404 from './containers/E404'
import Accomodation from './containers/Accomodation'

function App() {
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

export default App
