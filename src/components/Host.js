import React from 'react'
import '../styles/Host.css'

class Host extends React.Component {
	render() {
		return (
			<div className="host">
				<p>{this.props.name}</p>
				<img src={this.props.picture} alt="Host" />
			</div>
		)
	}
}

export default Host
