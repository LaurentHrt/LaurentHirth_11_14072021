import { React } from 'react'
import '../styles/Carrousel.css'

class Carrousel extends React.Component {
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

export default Carrousel
