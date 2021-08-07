import React from 'react'
import '../styles/Dropdown.css'

class Dropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isOpen: false }
	}

	render() {
		const { title, content } = this.props

		return (
			<div className="dropdown">
				<div
					className="dropdown__header"
					onClick={() => this.setState({ isOpen: !this.state.isOpen })}
				>
					<div className="title">{title}</div>
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
					{Array.isArray(content) ? (
						<ul>
							{content.map((element, index) => (
								<li key={index}>{element}</li>
							))}
						</ul>
					) : (
						<p>{content}</p>
					)}
				</div>
			</div>
		)
	}
}

export default Dropdown
