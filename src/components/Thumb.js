import React from 'react'
import '../styles/Thumb.css'

class Thumb extends React.Component {
	render() {
		return (
			<div class="thumb">
				<p>{this.props.title}</p>
				<img src={this.props.image} alt={this.props.title} />
			</div>
		)
	}
}

export default Thumb
