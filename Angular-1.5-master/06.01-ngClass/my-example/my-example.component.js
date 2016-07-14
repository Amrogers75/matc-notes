(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <my-example>
            templateUrl: "my-example/my-example.html",
            controller: myExampleController
        });

    function myExampleController($filter) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var self = this;
        self.email = '';
        self.myName = '';
        self.hasError = true;
        self.nameMatches = false;
        self.doChange = doChange;
        self.ChangeName = ChangeName;
        var myName = 'Anthony';

        function doChange() {
            self.email = $filter('lowercase')(self.email);
            self.hasError = !emailRegex.test(self.email);
        }

        function ChangeName(){
            self.nameMatches = myName === self.myName
        }
    }

})();
