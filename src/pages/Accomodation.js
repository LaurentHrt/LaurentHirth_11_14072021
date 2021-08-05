import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import '../styles/Accomodation.css'
import Tag from './../components/Tag'
import Carrousel from './../components/Carrousel'
import AccomodationTitle from './../components/AccomodationTitle'
import Host from './../components/Host'
import Rate from './../components/Rate'
import Dropdown from './../components/Dropdown'

class Accomodation extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			accomodation: {
				id: '',
				title: '',
				cover: '',
				pictures: [],
				description: '',
				host: { name: '', picture: '' },
				rating: '',
				location: '',
				equipments: [],
				tags: [],
			},
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id
		this.getData(id)
	}

	// TODO: Injection de dépendance
	async getData(id) {
		const response = await fetch('../logements.json')
		const data = await response.json()
		this.setState({
			accomodation: data.find((accomodation) => accomodation.id === id),
		})
	}

	render() {
		return this.state.accomodation === undefined ? (
			<Redirect to="/E404" />
		) : (
			<div className="accomodation-page">
				<Carrousel images={this.state.accomodation.pictures} />
				<AccomodationTitle
					title={this.state.accomodation.title}
					location={this.state.accomodation.location}
				/>
				<div className="tags">
					{this.state.accomodation.tags.map((tag) => (
						<Tag tagName={tag} key={tag} />
					))}
				</div>
				<div className="ratehost-container">
					<Rate rate={this.state.accomodation.rating} />
					<Host
						name={this.state.accomodation.host.name}
						picture={this.state.accomodation.host.picture}
					/>
				</div>
				<Dropdown
					title="Description"
					content={this.state.accomodation.description}
				/>
				<Dropdown
					title="équipements"
					content={this.state.accomodation.equipments}
				/>
			</div>
		)
	}
}

export default withRouter(Accomodation)
