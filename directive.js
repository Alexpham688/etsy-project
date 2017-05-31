var app = angular.module('myApp');
app.directive('etsyPost', function(){
  return {
      restrict: "E",
      replace: false,
      templateUrl: "display.html"
};
});
      app.directive('image',function(){
      return function(scope,element,attrs){
      element.css({
      'background-image':url("images/cart.jpg"),
      'background-size':'cover',
      'background-repeat':'no-repeat'
});
};
});
