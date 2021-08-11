import React from 'react'
import './Baseline.css'
import baselineBackground from '../../assets/pictures/baselineBackground.png'

class Baseline extends React.Component {
	render() {
		return (
			<div className="baseline">
				<img src={baselineBackground} alt="Baseline" />
				<p>Chez vous, partout et ailleurs</p>
			</div>
		)
	}
}

export default Baseline
