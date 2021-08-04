import React, { Fragment } from 'react'
import Baseline from '../components/Baseline'
import Thumb from '../components/Thumb'
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
				<Baseline />
				<div className="thumb-container">
					{this.state.data.map((accomodation) => (
						<Thumb
							key={accomodation.id}
							id={accomodation.id}
							title={accomodation.title}
							cover={accomodation.cover}
						/>
					))}
				</div>
			</Fragment>
		)
	}
}

export default Home
