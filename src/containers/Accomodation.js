import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Accomodation.css'

function Accomodation() {
	let { id } = useParams()

	return <h1>Accomodation {id}</h1>
}

export default Accomodation
