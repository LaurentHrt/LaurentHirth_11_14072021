import React from 'react'
import { Link } from 'react-router-dom'
import './E404.css'

class E404 extends React.Component {
	render() {
		return (
			<div className="E404-container">
				<h1>404</h1>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<Link to="/">Retourner sur la page d'accueil</Link>
			</div>
		)
	}
}

export default E404
