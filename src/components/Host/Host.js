import React from 'react'
import './Host.css'

class Host extends React.Component {
	render() {
		const { name, picture } = this.props
		return (
			<div className="host">
				<p>{name}</p>
				<img src={picture} alt="Host" />
			</div>
		)
	}
}

export default Host
