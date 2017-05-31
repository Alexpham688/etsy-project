var app = angular.module("myApp");
app.factory('cartService',function($http){
    var cartArray = [];

    function addToCart(product){
    console.log(product);
    cartArray.push(product);
};
    function getCartArray(){
    return cartArray
}
    return {
    addToCart:addToCart,
    getCartArray:getCartArray
  }
});
