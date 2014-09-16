function MyCtrl($scope,$firebase) {
  navigator.geolocation.getCurrentPosition(function(response){
    var markerRef = new Firebase("https://blazing-fire-6476.firebaseio.com/marker");
    $scope.markers = $firebase(markerRef);

    $scope.addMarker = function(){
      var p_lat = response.coords.latitude;
      var p_lng = response.coords.longitude;

      $scope.markers.$add($scope.newMarker());
      console.log($scope.markers);
      console.log(p_lat,p_lng - .100);
      $scope.newMarker = "";

    }

    var p_lat = response.coords.latitude;
    var p_lng = response.coords.longitude;

    // $scope.positions =[ 
    //   [p_lat,p_lng]
    // ];

  },function(errorResponse){
    console.log('error', errorResponse)
  });
};