'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('myApp')
    .controller('LoginCtrl', function($scope, $location) {

        $scope.submit = function() {

            $location.path('/homePage');

            return false;
        }

    });
