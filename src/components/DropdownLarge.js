import React from 'react'
import '../styles/DropdownLarge.css'

class DropdownLarge extends React.Component {
	render() {
		return (
			<div className="dropdownLarge">
				<div className="dropdownLarge__header">
					<div class="title">{this.props.title}</div>
					<div class="chevron">
						<i class="fas fa-chevron-up"></i>
					</div>
				</div>
				<div className="dropdownLarge__content">
					<p>{this.props.content}</p>
				</div>
			</div>
		)
	}
}

export default DropdownLarge
