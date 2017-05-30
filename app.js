var app = angular.module("myApp",['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when('/display', {
    templateUrl:"views/display.html",
    controller:"displayCtrl"
  })
  .when('/cart',{
    controller:"cartCtrl",
    templateUrl:"views/cart.html"
  })
  .otherwise({
    redirectTo:"/display"
  });


  });
