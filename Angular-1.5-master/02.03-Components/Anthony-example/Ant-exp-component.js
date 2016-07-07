/**
 * Created by anthonyrogers on 7/6/16.
 */
(function(){

    angular.module('myApp')
        .component('antExample', { // the tag for using this is <my-example></my-example>
            templateUrl: "Anthony-example/Ant-exp.html",
            controller: antExampleController()
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function antExampleController($log, $location) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        // this line prints the full URL to the console
        //$log.debug($location.absUrl());
    }

})();
