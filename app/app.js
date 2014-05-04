var ngMap = angular.module('parking', ['ngMap','ngRoute','firebase']);  //map directives

ngMap.config(function($routeProvider) {
  $routeProvider.
    when('/',
    {
      templateUrl: 'app/templates/index.html'
    }).
    when('/register',
    {
      templateUrl: 'app/templates/register.html'
    })
  }//end function
); // end config

ngMap.controller("extraMarker",function($scope){

});

ngMap.controller('mapController', function($scope,$firebase)
{
  var markerRef = new Firebase("https://blazing-fire-6476.firebaseio.com/marker");
  $scope.markers = $firebase(markerRef);

  var win_pos;
  var pos;

  var myZoom = 19;
  var myMarkerIsDraggable = true;
  var myCoordsLength = 6;
  var defaultLat = 28.594436;
  var defaultLng = -81.304407;

  var map = new google.maps.Map(document.getElementById('canvas'), {
    zoom: myZoom,
    center: new google.maps.LatLng(defaultLat, defaultLng),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(response) {
      var pos = new google.maps.LatLng(response.coords.latitude, response.coords.longitude);

      mypos_lat = response.coords.latitude;
      mypos_lng = response.coords.longitude;
      
      var win_pos = new google.maps.LatLng((response.coords.latitude), response.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: win_pos,
        animation: google.maps.Animation.BOUNCE,
        content: 'You are here.'
      });
      var myPos = new google.maps.Marker({
        position: pos,
        map:map,
        animation: google.maps.Animation.BOUNCE,
      })
      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    handleNoGeolocation(false);
  }

  $scope.newMarker = function(){

    var myZoom = 19;
    var myMarkerIsDraggable = true;
    var myCoordsLength = 6;
    var defaultLat = 28.594436;
    var defaultLng = -81.304407;

    $scope.position;

    var infowindow = new google.maps.InfoWindow({
      map: map,
      position: new google.maps.LatLng((defaultLat+.00005),defaultLng),
      content: 'Drag me to the open spot!'
    });

    var myMarker = new google.maps.Marker({
      position: new google.maps.LatLng(defaultLat, defaultLng),
      draggable: myMarkerIsDraggable,
      animation: google.maps.Animation.DROP,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });

    google.maps.event.addListener(myMarker, 'dragend', function(evt){
      var lat = evt.latLng.lat().toFixed(myCoordsLength)
      var lng = evt.latLng.lng().toFixed(myCoordsLength)

      $scope.position = lat+","+lng;
      $scope.markers.$add($scope.position);
    });

    // centers the map on markers coords
    map.setCenter(myMarker.position);

    // adds the marker on the map
    myMarker.setMap(map);
  }

});

ngMap.controller('dropMarker',function($scope,$firebase){

});

ngMap.controller('flagCoords', ['$scope', function($scope){
  $scope.getFlagCoords = function(){

  }
}]);
