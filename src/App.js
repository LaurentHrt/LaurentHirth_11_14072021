import './styles/App.css'

import Header from './containers/Header.js'
import Footer from './containers/Footer.js'
import { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import E404 from './containers/E404'

function App() {
	return (
		<Fragment>
			<Router>
				<Header />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="*">
						<E404 />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</Fragment>
	)
}

export default App
