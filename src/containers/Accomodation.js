import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Accomodation.css'

function Accomodation() {
	const { id } = useParams()
	const [data, setData] = useState({})

	async function getData() {
		const response = await fetch('../logements.json')
		const data = await response.json()
		setData(data.find((accomodation) => accomodation.id === id))
	}

	useEffect(() => getData(), [])

	return <h2>{data.title}</h2>
}

export default Accomodation
