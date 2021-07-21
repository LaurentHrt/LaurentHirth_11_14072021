import React from 'react'
import '../styles/Dropdown.css'

class Dropdown extends React.Component {
	render() {
		return (
			<div className="dropdown">
				<div className="dropdown__header">
					<div class="title">{this.props.title}</div>
					<div class="chevron">
						<i class="fas fa-chevron-up"></i>
					</div>
				</div>
				<div className="dropdown__content">
					{Array.isArray(this.props.content) ? (
						<ul>
							{this.props.content.map((element) => (
								<li>{element}</li>
							))}
						</ul>
					) : (
						<p>{this.props.content}</p>
					)}
				</div>
			</div>
		)
	}
}

export default Dropdown
