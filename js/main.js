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

// Sticky Navbar Opacity
window.addEventListener('scroll', function() {
  if(window.scrollY > 150) {
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $(this.hash).offset().top - 70
      },
      800
    );
  }
});