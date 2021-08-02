import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../styles/E404.css'

class E404 extends React.Component {
	render() {
		return (
			<Fragment>
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<Link to="/">Retourner sur la page d'accueil</Link>
			</Fragment>
		)
	}
}

export default E404
