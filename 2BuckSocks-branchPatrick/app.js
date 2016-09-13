(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp',[
        'ngCart',
        'ui.router',
        'ngStorage', 
        'toaster'
    ])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home-page></home-page>'
            })
            .state('store', {
                url: '/store',
                template: "<store-browse></store-browse>"
            })

    });
        
    //     .config(myAppConfig);
    //
    // function myAppConfig($urlRouterProvider, RestangularProvider) {
    //     $urlRouterProvider.otherwise('/main');
    //     RestangularProvider.setBaseUrl('https://random-names.firebaseio.com/');
    //     RestangularProvider.setRequestSuffix('.json');
    // }

})();
