import React from 'react'
import '../styles/CarrouselLarge.css'

class CarrouselLarge extends React.Component {
	render() {
		return (
			<div>
				{this.props.images.map((image, index) => (
					<img key={index} src={image} alt={image} />
				))}
			</div>
		)
	}
}

export default CarrouselLarge
