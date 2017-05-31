var app = angular.module('myApp');
app.directive('etsyPost', function(){
  return {
      restrict: "E",
      replace: false,
      templateUrl: "display.html"
};
});
