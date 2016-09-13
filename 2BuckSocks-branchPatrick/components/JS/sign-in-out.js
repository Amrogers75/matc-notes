(function () {
    angular.module('myApp')
        .component('homePage', {
            templateUrl: 'components/HTML/sing-in-out.html',
            controller: signInOut
        });


    function signInOut() {
        $scope.submit = function() {

            $location.path('/dashboard');

            return false;
    }
})();








