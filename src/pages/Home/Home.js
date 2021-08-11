import React, { Fragment } from 'react'
import Baseline from '../../components/Baseline/Baseline'
import Thumb from '../../components/Thumb/Thumb'
import AccomodationService from '../../service/accomodation.service'
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
		const accomodationService = new AccomodationService()
		const data = await accomodationService.getAllThumbData()
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
