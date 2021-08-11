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
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

	componentDidMount() {
		this.getData()
	}

	async getData() {
		const response = await fetch('logements.json')
		const data = await response.json()
		this.setState({ data: data })
	}

	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home data={this.state.data} />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/accomodations/:id">
						<Accomodation data={this.state.data} />
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
