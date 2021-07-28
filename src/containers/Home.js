import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

	async getData() {
		const response = await fetch('./logements.json')
		const data = await response.json()
		this.setState({ data: data })
	}

	componentDidMount() {
		this.getData()
	}

	render() {
		return (
			<Fragment>
				<h1>Home</h1>
				{this.state.data.map((accomodation) => (
					<Link key={accomodation.id} to={`/accomodations/${accomodation.id}`}>
						Accomodation {accomodation.id}
					</Link>
				))}
			</Fragment>
		)
	}
}

export default Home
