import React, { Fragment } from 'react'
import Baseline from '../../components/Baseline/Baseline'
import Thumb from '../../components/Thumb/Thumb'
import './Home.css'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

	componentDidMount() {
		this.getData()
	}

	async getData() {
		const response = await fetch('./logements.json')
		const data = await response.json()
		this.setState({ data: data })
	}

	render() {
		const { data } = this.state
		return (
			<Fragment>
				<Baseline />
				<div className="thumb-container">
					{data.map((accomodation) => (
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
