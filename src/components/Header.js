import React from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'

class Header extends React.Component {
	render() {
		return (
			<header>
				<a class="logo" href="index.html">
					<img src={logo} alt="Logo Kasa" />
				</a>
				<nav>
					<a href="#">Accueil</a>
					<a href="#">A Propos</a>
				</nav>
			</header>
		)
	}
}

export default Header
