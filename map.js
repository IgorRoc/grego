const latitude = -14.789526546263717
const longitude = -39.03310762615234
// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uluru = { lat: latitude, lng: longitude }
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 18,
		center: uluru,
	})
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	})
}
