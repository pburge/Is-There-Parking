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
  // console.log('extraMarker',$scope);
});

ngMap.controller('mapController', ['$scope', function($scope){
 $scope.positions =[ 
   [28.594483, -81.304403], [28.594437, -81.304399]
 ];

 var markers = [];
 for (var i = 0; i < 8; i++) {
   markers[i] = new google.maps.Marker({
     title: "Marker: " + i
   })
 }

 $scope.GenerateMapMarkers = function() {
   var d = new Date(); //To show marker location changes over time
   $scope.date = d.toLocaleString();

   var numMarkers = Math.floor(Math.random() * 4) + 4; //between 4 to 8 markers
   for (i = 0; i < numMarkers; i++) {
     var lat = 43.6600000 + (Math.random() / 100);
     var lng = -79.4103000 + (Math.random() / 100);

     var loc = new google.maps.LatLng(lat, lng);
     markers[i].setPosition(loc);
     markers[i].setMap($scope.map);
   }
 };

 $timeout($scope.GenerateMapMarkers, 2000);
  
}]);
ngMap.controller('showMarker', ['$scope', function($scope){
  $scope.myMarkers = [];
  $scope.addMarker = function ($event, $params){
    // $scope.myMarkers.push(new google.maps.Marker({
    //   map: $scope.map,
    //   position: $params[0].latLng
    // }));
    // return myMarkers;

    console.log($scope.map,$params);

  };
}]);

ngMap.controller('flagCoords', ['$scope', function($scope){
  $scope.getFlagCoords = function(){

  }
}]);
