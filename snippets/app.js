app/app.js

var module = angular.module("parking", ["google-maps","ngRoute"]);

module.config(function($routeProvider) {
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

var controller = module.controller('MapCtrl', function($scope) {
  $scope.myMarkers = [
      {
         "latitude":28.594483,
         "longitude":-81.304403
      },
  ];

  $scope.center = {
      "latitude":28.594483,
      "longitude":-81.304403,
  };

  $scope.zoom = 13;
  $scope.markers = $scope.myMarkers;
  $scope.fit = true;
});