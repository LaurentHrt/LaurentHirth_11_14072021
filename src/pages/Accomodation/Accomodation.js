import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import './Accomodation.css'
import Tag from '../../components/Tag/Tag'
import Carrousel from '../../components/Carrousel/Carrousel'
import Host from '../../components/Host/Host'
import Rate from '../../components/Rate/Rate'
import Dropdown from '../../components/Dropdown/Dropdown'

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
		this.setState({
			accomodation: this.props.data.find(
				(accomodation) => accomodation.id === id
			),
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
