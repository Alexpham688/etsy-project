var app = angular.module("myApp");
app.controller("displayCtrl", function($scope, $http, cartService){
 $scope.finalArray =[];
 $scope.getEtsy = function(object){
 $.ajax({
      url: 'https://openapi.etsy.com/v2/listings/active.js?keywords=beauty&api_key=pxko1iiclmwlxqjqppii8m7k&includes=MainImage',
      dataType: 'jsonp',
      data: { limit: '18' },
      success: function(data) {
      $scope.productArray = data.results;

}
}).done(function(){

        $scope.productArray.forEach(function(object){
          var title = object.title;
          var description = object.description;
          var price = object.price;
          var mainImage = object.MainImage.url_75x75;

          var etsyProduct ={
          title:title, description:description,
          price:price, mainImage:mainImage
          };
          $scope.finalArray.push(etsyProduct);
});
      console.log($scope.finalArray);
      $scope.$digest();
});
};
    $scope.getEtsy();
    $scope.addItem = function(product){
    cartService.addToCart(product);
    console.log(product);
};
});
