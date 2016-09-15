(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp',[
        'ngCart',
        'ui.router',
        'ngStorage', 
        'toaster',
        'firebase'
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
            .state('login', {
                url: '/login',
                template: "<login-page></login-page>"
            })
        var config = {
            apiKey: "AIzaSyA7cackwcjIMo4J2rVQJdyDJuZb8vfDpmo",
            authDomain: "bucksock-254e1.firebaseapp.com",
            databaseURL: "https://bucksock-254e1.firebaseio.com",
            storageBucket: "bucksock-254e1.appspot.com",
            messagingSenderId: "30782521763"
        };
        firebase.initializeApp(config);

    });



})();

//     .config(myAppConfig);
//
// function myAppConfig($urlRouterProvider, RestangularProvider) {
//     $urlRouterProvider.otherwise('/main');
//     RestangularProvider.setBaseUrl('https://random-names.firebaseio.com/');
//     RestangularProvider.setRequestSuffix('.json');
// }