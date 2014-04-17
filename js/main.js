function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(28.5962103,-81.3013229)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}