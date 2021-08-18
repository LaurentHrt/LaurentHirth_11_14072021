import React from 'react'
import { Link } from 'react-router-dom'
import './Thumb.css'

class Thumb extends React.Component {
	render() {
		const { id, title, cover } = this.props

		return (
			<div className="thumb">
				<Link to={`/accomodations/${id}`}>
					<p>{title}</p>
					<img src={cover} alt={title} />
				</Link>
			</div>
		)
	}
}

export default Thumb
