import React, { Fragment } from 'react'
import Baseline from '../../components/Baseline/Baseline'
import Thumb from '../../components/Thumb/Thumb'
import './Home.css'

class Home extends React.Component {
	render() {
		const { data } = this.props

		return (
			<Fragment>
				<Baseline />
				<div className="thumb-container">
					{data.map((accomodation) => (
						<Thumb
							key={accomodation.id}
							id={accomodation.id}
							title={accomodation.title}
							cover={accomodation.cover}
						/>
					))}
				</div>
			</Fragment>
		)
	}
}

export default Home
