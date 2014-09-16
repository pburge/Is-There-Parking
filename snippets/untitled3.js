
  var app = angular.module('myApp', ['ngMap']); 
  app.controller('MyController', ['$scope', function($scope) {
    $scope.latlng = [40.741, -74.181];
    $scope.radius = 3500;
    $scope.getRadius = function(event) {
      alert('this circle has radius ' + this.getRadius());
    }
    $scope.setCenter = function(event) {
      this.setCenter(event.latLng);
    }
    $scope.foo = function(event, arg1, arg2) {
      alert('this is at '+ this.getPosition());
      alert(arg1+arg2);
    }
    $scope.dragStart = function(event) {
        console.log("drag started");
    }
    $scope.drag = function(event) {
        console.log("dragging");
    }
    $scope.dragEnd = function(event) {
        console.log("drag ended");
    }
  }]);

  
    <div ng-controller="MyController" class="ng-scope">
      Events are applied to map, markers, and shapes.
      <br>
      All event-related attributes are preceded by 'on-', i.e. on-click, on-mouseover, etc
      <br>
      <br>
      <map zoom="11" center="[40.741,-74.181]" on-click="setCenter()" tilt="0">
        <marker position="[40.79, -74.20]" on-click="foo(2,3)"></marker>
        <shape name="circle" stroke-color="#FF0000" stroke-weight="2" center="[40.741,-74.181]" radius="3500" on-click="getRadius()" draggable="true" on-dragstart="dragStart()" on-drag="drag()" on-dragend="dragEnd()">
      </shape></map>
    </div>
  