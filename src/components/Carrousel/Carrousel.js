import React from 'react'
import './Carrousel.css'
import rightArrow from '../../assets/pictures/rightArrow.png'
import leftArrow from '../../assets/pictures/leftArrow.png'

class Carrousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = { imageIndex: 0 }
	}

	onClickLeftArrow() {
		let currentIndex = this.state.imageIndex
		if (currentIndex === 0)
			this.setState({ imageIndex: this.props.images.length - 1 })
		else this.setState({ imageIndex: --currentIndex })
	}

	onClickRightArrow() {
		let currentIndex = this.state.imageIndex
		if (currentIndex === this.props.images.length - 1) {
			this.setState({ imageIndex: 0 })
		} else {
			this.setState({ imageIndex: ++currentIndex })
		}
	}

	render() {
		const { imageIndex } = this.state
		const { images } = this.props

		return (
			<div className="carrousel">
				{images.length > 1 ? (
					<img
						className="leftArrow"
						src={leftArrow}
						alt="left"
						onClick={() => this.onClickLeftArrow()}
					/>
				) : null}
				<img
					className="carrouselImages"
					src={this.props.images[imageIndex]}
					alt={this.props.images[imageIndex]}
				/>
				{images.length > 1 ? (
					<img
						className="rightArrow"
						src={rightArrow}
						alt="right"
						onClick={() => this.onClickRightArrow()}
					/>
				) : null}
			</div>
		)
	}
}

export default Carrousel
