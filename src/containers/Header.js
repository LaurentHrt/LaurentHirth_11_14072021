import React from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<header>
				<a className="logo" href="index.html">
					<img src={logo} alt="Logo Kasa" />
				</a>
				<nav>
					<Link to="/home">Accueil</Link>
					<Link to="/about">A propos</Link>
				</nav>
			</header>
		)
	}
}

export default Header
