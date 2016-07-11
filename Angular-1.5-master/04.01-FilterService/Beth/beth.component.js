/**
 * Created by anthonyrogers on 7/8/16.
 */
(function(){

    angular.module('myApp')
        .component('beth', { // the tag for using this is <my-example>
            templateUrl: "Beth/beth.html",
            controller: myExampleController
        });

    function myExampleController($filter, $scope, $cacheFactory, $log) {

        var user1 = { name: 'Jim Dandy', email: 'jim@dandy.io', phone:
            '555-1212' };

        var cache =  $cacheFactory('appCache');

       cache.put('user', user1);
        // somewhere else in the app

        var user = cache.get('user'); $log.log(user);

        function loadName(){}

        function saveName(){}
    }

})();