function initialize() {
  var mapOptions = {
    zoom: 18,
    center: new google.maps.LatLng(28.5962480,-81.3025460)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}