/**
 * Created by anthonyrogers on 7/8/16.
 */
(function(){

    angular.module('myApp')
        .component('bob', { // the tag for using this is <my-example>
            templateUrl: "bob/frank.html",
            controller: myExampleController
        });

    function myExampleController($filter, $scope) {

        var self = this;
        self.name = $filter('lowercase')('Frank');
        self.doChange = doChange;

        function doChange() {
            self.name = $filter('lowercase')(self.name);
        }
    }

})();