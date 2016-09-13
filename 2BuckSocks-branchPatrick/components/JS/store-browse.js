(function () {
    angular.module('myApp')
        .component('storeBrowse', {
            templateUrl: 'components/HTML/store-browse.html',
            controller: storeBrowseController
        });
    

    function storeBrowseController( ngCart ) {
        console.log('Hi There 2');
        
        ngCart.setTaxRate(7.5);
        ngCart.setShipping(2.99);
    }
})();



// var myApp = angular.module('myApp',['ngCart']);
//
// myApp.controller ('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
//     ngCart.setTaxRate(7.5);
//     ngCart.setShipping(2.99);
// }]);