export default class AccommodationService {
	async getAllThumbData() {
		const response = await fetch('../logements.json')
		const data = await response.json()
		return data.map((accomodation) => {
			return {
				id: accomodation.id,
				cover: accomodation.cover,
				title: accomodation.title,
			}
		})
	}

	async getAccomodationData(id) {
		const response = await fetch('../logements.json')
		const data = await response.json()
		return data.find((accomodation) => accomodation.id === id)
	}
}
