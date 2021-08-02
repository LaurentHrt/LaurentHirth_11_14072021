import React from 'react'
import '../styles/Tag.css'

class Tag extends React.Component {
	render() {
		return <div className="tag">{this.props.tagName}</div>
	}
}

export default Tag
