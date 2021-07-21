import React from 'react'
import './Tag.css'

class Tag extends React.Component {
	render() {
		return <div class="tag">{this.props.tagName}</div>
	}
}

export default Tag
