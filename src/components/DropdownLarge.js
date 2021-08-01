import React from 'react'
import '../styles/DropdownLarge.css'

class DropdownLarge extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isOpen: false }
	}

	render() {
		return (
			<div className="dropdownLarge">
				<div
					className="dropdownLarge__header"
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
					className={
						this.state.isOpen ? 'dropdownLarge__content' : 'display-none'
					}
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

export default DropdownLarge
