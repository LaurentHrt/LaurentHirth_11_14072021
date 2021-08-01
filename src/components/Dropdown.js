import React from 'react'
import '../styles/Dropdown.css'

class Dropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isOpen: false }
	}

	render() {
		return (
			<div className="dropdown">
				<div
					className="dropdown__header"
					onClick={() => this.setState({ isOpen: !this.state.isOpen })}
				>
					<div className="title">{this.props.title}</div>
					<div className="chevron">
						<i
							className={
								this.state.isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
							}
						></i>
					</div>
				</div>
				<div
					className={this.state.isOpen ? 'dropdown__content' : 'display-none'}
				>
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
