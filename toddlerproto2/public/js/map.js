// Assuming map has already been initialized
let map = L.map('map').setView([39.2847064, -76.6204968], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Fetch AQMap data from /data endpoint
fetch('/data')
    .then(response => response.json())
    .then(data => {
        // Loop through the data and create markers
        for (let locKey in data) {
            let location = data[locKey];
            let marker = L.marker([location.latitude, location.longitude]).addTo(map);
            marker.bindPopup(`<b>${location.name}</b><br>AQ: ${location.AQ}`).openPopup();
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
