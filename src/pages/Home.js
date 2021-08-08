import React, { Fragment } from 'react'
import Baseline from '../components/Baseline'
import Thumb from '../components/Thumb'
import '../styles/Home.css'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}

	componentDidMount() {
		this.getData()
	}

	async getData() {
		const response = await fetch(
			'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ddbc00d0-faf0-401c-8cbb-23b9b791b41f/logements.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210808T093544Z&X-Amz-Expires=86400&X-Amz-Signature=cc7e631f0db12548d159544f6aca687fc094639731c0c071111de19080b83e3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22logements.json%22'
		)
		const data = await response.json()
		this.setState({ data: data })
	}

	render() {
		return (
			<Fragment>
				<Baseline />
				<div className="thumb-container">
					{this.state.data.map((accomodation) => (
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
