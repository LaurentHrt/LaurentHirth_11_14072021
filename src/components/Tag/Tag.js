import React from 'react'
import './Tag.css'

class Tag extends React.Component {
	render() {
		const { tagName } = this.props

		return <div className="tag">{tagName}</div>
	}
}

export default Tag
