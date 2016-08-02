(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', [
        /* listed imported modules here */
        'ui.router',
        //'ngResource'
        'restangular'
    ])
        .config(myAppConfig);

    function myAppConfig($urlRouterProvider, RestangularProvider) {
        $urlRouterProvider.otherwise('/main');
        RestangularProvider.setBaseUrl('https://random-names.firebaseio.com/');
        RestangularProvider.setRequestSuffix('.json');
    }

})();

//https://random-names.firebaseio.com/.jason