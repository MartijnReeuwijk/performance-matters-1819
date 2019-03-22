
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

// Change stings to numbers and change so i dont need to reurn an arry

(function() {
  'use strict';
initMap(victim)
function initMap(victim) {
  var map, infoWindow;
  console.log(victim);

  var locationVictim = {
    lat: parseFloat(victim[0].latitude),
    lng: parseFloat(victim[0].longitude)
  };

  map = new google.maps.Map(document.getElementById("map"), {
    center: locationVictim,
    zoom: 19
  });
  var marker = new google.maps.Marker({
    position: locationVictim,
    map: map,
    title: parseFloat(victim[0].incident_key)
  });
  infoWindow = new google.maps.InfoWindow();
}

/// check deze laters
function drawNewYorkMap(victims) {
  map = new google.maps.Map(document.getElementById("map"), mapProp);

  infoWindow = new google.maps.InfoWindow();
  for (count = 999; count < victims.length; count++) {
    map = new google.maps.Map(document.getElementById("map"), mapProp);

    var mapProp = {
      center: new google.maps.LatLng(
        parseFloat(victims[count].latitude),
        parseFloat(victims[count].longitude)
      ),
      zoom: 10,
      marker: (marker = new google.maps.Marker({
        map: map
      })),
      mapTypeId: google.maps.MapTypeId.NYC
    };
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

 }());
