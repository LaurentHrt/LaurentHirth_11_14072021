import React from 'react'
import './Rate.css'

class Rate extends React.Component {
	render() {
		const { rate } = this.props
		const range = [1, 2, 3, 4, 5]

		return (
			<div className="rate">
				{range.map((range) =>
					rate >= range ? (
						<i key={range} className="fas fa-star checked"></i>
					) : (
						<i key={range} className="fas fa-star"></i>
					)
				)}
			</div>
		)
	}
}

export default Rate
