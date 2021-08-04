import React from 'react'
import '../styles/Carrousel.css'

class Carrousel extends React.Component {
	render() {
		return (
			<div className="carrousel">
				{this.props.images.map((image, index) => (
					<img key={index} src={image} alt={image} />
				))}
			</div>
		)
	}
}

export default Carrousel
