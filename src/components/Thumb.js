import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Thumb.css'

class Thumb extends React.Component {
	render() {
		return (
			<div className="thumb">
				<Link to={`/accomodations/${this.props.id}`}>
					<p>{this.props.title}</p>
					<img src={this.props.cover} alt={this.props.title} />
				</Link>
			</div>
		)
	}
}

export default Thumb
