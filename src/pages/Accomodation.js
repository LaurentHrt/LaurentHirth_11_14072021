import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import '../styles/Accomodation.css'
import CarrouselLarge from './../components/CarrouselLarge'
import Tag from './../components/Tag'

class Accomodation extends React.Component {
	constructor(props) {
		super(props)
		this.state = { accommodation: {} }
	}

	componentDidMount() {
		const id = this.props.match.params.id
		this.getData(id)
	}

	async getData(id) {
		const response = await fetch('../logements.json')
		const data = await response.json()
		this.setState({
			accommodation: data.find((accomodation) => accomodation.id === id),
		})
		console.log(this.state.accommodation)
	}

	render() {
		return (
			<Fragment>
				{/* !! Poser la question à Karim */}
				{this.state.accommodation.pictures ? (
					<CarrouselLarge images={this.state.accommodation.pictures} />
				) : null}
				<h1>{this.state.accommodation.title}</h1>
				<h2>{this.state.accommodation.location}</h2>
				<div className="tags">
					{this.state.accommodation.tags
						? this.state.accommodation.tags.map((tag) => (
								<Tag tagName={tag} key={tag} />
						  ))
						: null}
				</div>
			</Fragment>
		)
	}
}

export default withRouter(Accomodation)
