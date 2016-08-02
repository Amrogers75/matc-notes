(function () {
    angular.module('app')
        .component('myForm', {
            templateUrl: 'my-form/my-form.component.html',
            controller: MyFormController,
            controllerAs: 'vm'
        });

    function MyFormController($scope) {
        var vm = this;
        
        vm.master = {};

        vm.update = function (user) {
            vm.master = angular.copy(user);
        };

        vm.reset = function () {
            vm.user = angular.copy(vm.master);
        };

        vm.reset();
        
        vm.messages = {
            'required': 'Age is required.',
            'integer': 'Age must be an integer.',
            'min': 'You must be 18.',
            'max': 'How are you not dead.'
        };

        vm.getAgeErrorMessage = function() {
            var key = Object.keys($scope.form.inputAge.$error)[0];
            return vm.messages[key] ||'';
            
        };
    }
})();