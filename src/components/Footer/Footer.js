import React from 'react'
import './Footer.css'

import logo from '../../assets/logo.svg'

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<img src={logo} alt="Logo Kasa" />
				<p>© 2021 Kasa. All rights reserved</p>
			</footer>
		)
	}
}

export default Footer
