(function () {
    angular.module('myApp')
        .component('loginPage', {
            templateUrl: 'components/HTML/sign-in-out.html',
            controller: signInOut,
            controllerAs: 'vm'
        });


    //function signInOut() {

        //this.submit = function() {

            // $location.path('/dashboard');

        //};
        // return false;
   // }
//})();
    function signInOut(User){
        var vm = this;
        vm.showLogin = false;
        vm.email = undefined;
        vm.password = undefined;
        vm.displayName = User.getDisplayName();
        vm.close = close;

        vm.showEmailLogin = showEmailLogin;
        vm.login = login;
        vm.loginWithEmail = loginWithEmail;
        vm.logout = logout;

        function showEmailLogin() {
            vm.showLogin = !vm.showLogin;
        }

        function loginWithEmail() {
            User.loginWithEmail(vm.email, vm.password)
                .then(function () {
                    vm.displayName = User.getDisplayName();
                    vm.showLogin = false;
                    vm.password = undefined;
                });
        }

        function login(provider) {
            User.login(provider)
                .then(function () {
                    vm.displayName = User.getDisplayName();
                    vm.showLogin = false;
                });
        }

        function logout() {
            User.logout();
            vm.displayName = undefined;
        }

    }


})();






