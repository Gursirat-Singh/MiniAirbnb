window.addEventListener("DOMContentLoaded", () => {
    const mapDiv = document.getElementById("map");
    const location = mapDiv.dataset.location;

    if (!location) {
        console.error("No location provided!");
        return;
    }

    // Fetch geocoding from Nominatim
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;

                // Initialize the map
                const map = L.map('map').setView([lat, lon], 13);

                // Add OpenStreetMap tiles
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                }).addTo(map);

                const customIcon = L.icon({
                    iconUrl: "/javascript/iconMap.svg",
                    iconSize: [48, 48],
                    iconAnchor: [24, 48],
                    popupAnchor: [0, -48]
                });

                L.marker([lat, lon], { icon: customIcon })
                    .addTo(map)
                    .bindPopup(location)
                    .openPopup();

            } else {
                console.error("Geocoding failed: no data returned.");
            }
        })
        .catch(err => console.error("Geocoding error:", err));
});
