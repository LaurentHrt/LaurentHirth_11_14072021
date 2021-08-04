import React from 'react'
import '../styles/AccomodationTitle.css'

class AccomodationTitle extends React.Component {
	render() {
		return (
			<div className="accomodationTitle-container">
				<p className="accommodationTitle">{this.props.title}</p>
				<p className="accommodationLocation">{this.props.location}</p>
			</div>
		)
	}
}

export default AccomodationTitle
