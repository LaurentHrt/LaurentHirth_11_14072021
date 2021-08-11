import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import './Accomodation.css'
import Tag from '../../components/Tag/Tag'
import Carrousel from '../../components/Carrousel/Carrousel'
import Host from '../../components/Host/Host'
import Rate from '../../components/Rate/Rate'
import Dropdown from '../../components/Dropdown/Dropdown'
import AccomodationService from '../../service/accomodation.service'

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
		this.getData()
	}

	async getData() {
		const accomodationService = new AccomodationService()
		const id = this.props.match.params.id
		const data = await accomodationService.getAccomodationData(id)
		this.setState({
			accomodation: data,
		})
	}

	render() {
		const { accomodation } = this.state

		return accomodation === undefined ? (
			<Redirect to="/E404" />
		) : (
			<div className="accomodation-page">
				<Carrousel images={accomodation.pictures} />
				<div className="accomodation-header">
					<div className="titletag-container">
						<p className="accommodationTitle">{accomodation.title}</p>
						<p className="accommodationLocation">{accomodation.location}</p>
						<div className="tags">
							{accomodation.tags.map((tag) => (
								<Tag tagName={tag} key={tag} />
							))}
						</div>
					</div>
					<div className="ratehost-container">
						<Rate rate={accomodation.rating} />
						<Host
							name={accomodation.host.name}
							picture={accomodation.host.picture}
						/>
					</div>
				</div>
				<div className="accomodation-dropdownsContainer">
					<Dropdown title="description" content={accomodation.description} />
					<Dropdown title="équipements" content={accomodation.equipments} />
				</div>
			</div>
		)
	}
}

export default withRouter(Accomodation)
