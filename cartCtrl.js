var app = angular.module("myApp");
app.controller("cartCtrl",function($scope,
    cartService){
    $scope.cartArray = cartService.getCartArray();
    $scope.total = 0;
    for(var i = 0;i < $scope.cartArray.length;i++){
    console.log($scope.cartArray[i].price);
    $scope.total += Number($scope.cartArray[i].price);
}
});
