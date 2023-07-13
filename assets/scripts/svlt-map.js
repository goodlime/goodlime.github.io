let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.109, lng: -77.005 },
    zoom: 8,
  });
}

window.initMap = initMap;