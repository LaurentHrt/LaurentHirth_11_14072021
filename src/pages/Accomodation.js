import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import '../styles/Accomodation.css'
import Tag from './../components/Tag'
import Carrousel from './../components/Carrousel'
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
		const response = await fetch(
			'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ddbc00d0-faf0-401c-8cbb-23b9b791b41f/logements.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210808T093544Z&X-Amz-Expires=86400&X-Amz-Signature=cc7e631f0db12548d159544f6aca687fc094639731c0c071111de19080b83e3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22logements.json%22'
		)
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
				<div className="accomodation-header">
					<div className="titletag-container">
						<p className="accommodationTitle">
							{this.state.accomodation.title}
						</p>
						<p className="accommodationLocation">
							{this.state.accomodation.location}
						</p>
						<div className="tags">
							{this.state.accomodation.tags.map((tag) => (
								<Tag tagName={tag} key={tag} />
							))}
						</div>
					</div>
					<div className="ratehost-container">
						<Rate rate={this.state.accomodation.rating} />
						<Host
							name={this.state.accomodation.host.name}
							picture={this.state.accomodation.host.picture}
						/>
					</div>
				</div>
				<div className="accomodation-dropdownsContainer">
					<Dropdown
						title="Description"
						content={this.state.accomodation.description}
					/>
					<Dropdown
						title="équipements"
						content={this.state.accomodation.equipments}
					/>
				</div>
			</div>
		)
	}
}

export default withRouter(Accomodation)
