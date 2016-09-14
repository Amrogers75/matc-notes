(function () {
    angular.module('myApp')
        .component('loginPage', {
            templateUrl: 'components/HTML/sign-in-out.html',
            controller: signInOut
        });


    function signInOut() {

        this.submit = function() {

            // $location.path('/dashboard');

        };
        // return false;
    }
})();








