import React from 'react'
import '../styles/Rate.css'

class Rate extends React.Component {
	render() {
		const range = [1, 2, 3, 4, 5]

		return (
			<div className="rate">
				{range.map((rate) =>
					this.props.rate >= rate ? (
						<i key={rate} className="fas fa-star checked"></i>
					) : (
						<i key={rate} className="fas fa-star"></i>
					)
				)}
			</div>
		)
	}
}

export default Rate
