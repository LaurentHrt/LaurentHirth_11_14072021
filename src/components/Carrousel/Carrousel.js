import React from 'react'
import './Carrousel.css'

class Carrousel extends React.Component {
	render() {
		const { images } = this.props

		return (
			<div className="carrousel">
				{images.map((image, index) => (
					<img key={index} src={image} alt={image} />
				))}
			</div>
		)
	}
}

export default Carrousel
