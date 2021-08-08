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
			<div
				className={this.state.isOpen ? 'dropdown dropdown-is-open' : 'dropdown'}
			>
				<div
					className="dropdown__header"
					onClick={() => this.setState({ isOpen: !this.state.isOpen })}
				>
					<div className="title">{title}</div>
					<div className="chevron">
						<i className="fas fa-chevron-up"></i>
					</div>
				</div>
				<div className="dropdown__content">
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
