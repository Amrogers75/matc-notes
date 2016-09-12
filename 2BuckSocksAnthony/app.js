(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp',['ngCart', 'ngStorage' ]);
            
        
    //     .config(myAppConfig);
    //
    // function myAppConfig($urlRouterProvider, RestangularProvider) {
    //     $urlRouterProvider.otherwise('/main');
    //     RestangularProvider.setBaseUrl('https://random-names.firebaseio.com/');
    //     RestangularProvider.setRequestSuffix('.json');
    // }

})();
