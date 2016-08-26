(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            controllerAs: 'vm'
        })
        .config(charListConfig);

    function charListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<char-detail></char-detail>'
        });
    }

    function charDetailController(characterService) {
        var vm = this;

        characterService.characters.$loaded().then(function(){
            vm.characters = characterService.selectedChar;
        });

        vm.close = close;
        vm.save = save;
        vm.deleteChar = deleteChar;

        function close() {
            vm.character = characterService.selectedChar = undefined;
        }

        function save() {
            console.log('saving...');
            console.log('add...');
            console.log(JSON.stringify(vm.character));

            characterService.characters.$save(vm.character);
            characterService.characters.$add(vm.character);
        }

        function deleteChar() {
            console.log('deleting...');
            console.log(JSON.stringify(vm.character));

            characterService.characters.$remove(vm.character);
        }
    }

})();
