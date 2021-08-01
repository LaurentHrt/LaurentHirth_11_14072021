import { React } from 'react'
import '../styles/CarrouselLarge.css'

class CarrouselLarge extends React.Component {
	render() {
		return (
			<div>
				{this.props.images.map((image) => (
					<img src={image.src} alt={image.alt} />
				))}
			</div>
		)
	}
}

export default CarrouselLarge
