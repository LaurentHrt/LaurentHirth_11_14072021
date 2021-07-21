import React from 'react'
import './Thumb.css'

class Thumb extends React.Component {
	render() {
		return (
			<div class="thumb">
				<img src={this.props.image} alt={this.props.title} />
				<p>{this.props.title}</p>
			</div>
		)
	}
}

export default Thumb
