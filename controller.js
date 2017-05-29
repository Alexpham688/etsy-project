var app = angular.module("myApp");
app.controller("myCtrl", function($scope, $http){
  // $scope.posts = [];
 $scope.finalArray =[];
  $scope.numArray = [1, 2, 3, 4];
  $scope.getEtsy = function(object){
    $.ajax({
      url: 'https://openapi.etsy.com/v2/listings/active.js?keywords=beauty&api_key=pxko1iiclmwlxqjqppii8m7k&includes=MainImage',
      dataType: 'jsonp',
      success: function(data) {
        $scope.productArray = data.results;
          // console.log($scope.productArray);
      }
    }).done(function(){

        $scope.productArray.forEach(function(object,results){
             var title = object.title;
             var description = object.description;
             var price = object.price;
             var mainImage = object.MainImage.url_75x75;

             var etsyProduct ={
               title:title, description:description,
               price:price, mainImage:mainImage
             };
             $scope.finalArray.push(etsyProduct);
           });console.log($scope.finalArray);
            $scope.digest();
        });
  };
$scope.getEtsy();
  // $scope.subEtsy = response.data.data.children
// console.log($scope.posts);
});
