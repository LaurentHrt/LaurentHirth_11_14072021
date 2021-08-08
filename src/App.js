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
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

	componentDidMount() {
		this.getData()
	}

	async getData() {
		const response = await fetch(
			'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ddbc00d0-faf0-401c-8cbb-23b9b791b41f/logements.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210808T093544Z&X-Amz-Expires=86400&X-Amz-Signature=cc7e631f0db12548d159544f6aca687fc094639731c0c071111de19080b83e3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22logements.json%22'
		)
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
