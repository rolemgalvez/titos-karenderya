// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 14.537752, lng: 121.001381 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned and location
  const marker = new google.maps.Marker({ position: loc, map: map });
}