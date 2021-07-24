import React, { Fragment } from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import '../styles/Home.css'
import Accomodation from './Accomodation'

class Home extends React.Component {
	render() {
		return (
			<Fragment>
				<h1>Home</h1>
				<Link to="/home/1234">Acomodation 1234</Link>
				<br />
				<Link to="/home/5678">Acomodation 5678</Link>

				<Switch>
					<Route path="/home/:id">
						<Accomodation />
					</Route>
				</Switch>
			</Fragment>
		)
	}
}

export default Home
